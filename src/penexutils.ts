var DeviceType = {
    phone: window.innerWidth / window.innerHeight < 1,
    // Broken
    tablet: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
}

console.log(navigator.userAgent)

type HTMLMarkup = string

interface Component {
    pens?: Pen<Elements>[]
    // tf are these names ;-;
    penIt?(): Pen<Elements>[]
    stringIt?(): string
}

class Components {
    pens: Pen<Elements>[] = []
    scripts: (() => void)[] = []

    constructor() {}

    addComponents(component: Component[]): void {
        for (let i = 0; i < component.length; i++) {
            this.addComponent(component[i])
        }
    }

    addScript(script: () => void): void {
        this.scripts.push(script)
    }

    addComponent(component: Component): void {
        let pen: Pen<Elements>[] = []

        if (component.stringIt) {
            pen = Pen.fromHTML(component.stringIt())
        } else if (component.penIt) {
            pen = component.penIt()
        }

        if (Array.isArray(pen)) {
            this.pens.push(...pen)
        } else {
            this.pens.push(pen)
        }
    }
}

enum elementGlobals {
    mainApp = 'main-app',
}

type Elements = HTMLElement | HTMLInputElement | HTMLTextAreaElement | HTMLIFrameElement

class Pen<T extends Elements> {
    element: T
    parent?: HTMLElement | elementGlobals

    constructor(tag: string, parent?: T | elementGlobals) {
        this.element = document.createElement(tag) as T

        if (parent) this.setParent(parent)
    }

    setParent(parent: HTMLElement | elementGlobals) {
        if (parent instanceof HTMLElement) {
            this.parent = parent
            this.parent.appendChild(this.element)
        } else if (parent === elementGlobals.mainApp) this.parent = elementGlobals.mainApp
    }

    static fromElement<E extends Elements>(element: E, parent?: E | elementGlobals): Pen<E> {
        let pen: Pen<E> = new Pen(element.tagName)
        pen.element = element
        if (parent) pen.setParent(parent)
        else if (element.parentElement) pen.setParent(element.parentElement!)

        return pen
    }

    static fromHTML(html: HTMLMarkup): Pen<Elements>[] {
        const element = document.createElement('div')
        element.innerHTML = html

        const pens: Pen<HTMLElement>[] = []

        Array.from(element.children).forEach((child) => {
            const pen = Pen.fromElement(child as HTMLElement, elementGlobals.mainApp)
            pens.push(pen)
        })

        element.querySelectorAll('*').forEach((child) => {
            const pen = Pen.fromElement(child as HTMLElement)
            pens.push(pen)
        })

        return pens
    }
}

function getPenFromElementId(id: string, pens: Pen<Elements>[]): Pen<Elements> {
    let pen = pens.filter((p) => p.element.id === id)[0]
    if (pen) return pen
    else throw new Error(`No pen with id ${id} found.`)
}

export { getPenFromElementId, Component, Components, Pen, elementGlobals, Elements, DeviceType }
