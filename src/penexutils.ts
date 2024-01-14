type HTMLMarkup = string

type Listener = {
    name: string
    callback: (() => void) | ((e: Event) => void)
    once?: boolean
}

interface Component {
    // tf are these names ;-;
    penIt?(): Pen[]
    stringIt?(): string
}

abstract class Component {
    pens: Pen[] = []
}

class Components {
    pens: Pen[] = []
    scripts: (() => void)[] = []

    constructor() {}

    addComponent(component: Component) {
        let pen: Pen | Pen[] = []
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

    addScript(script: () => void): void {
        this.scripts.push(script)
    }
}

enum elementGlobals {
    mainApp = 'main-app',
}

class Pen {
    element: HTMLElement
    parent?: HTMLElement | elementGlobals
    private listeners: Listener[]

    constructor(tag: string, listeners: Listener[] = [], parent?: HTMLElement | elementGlobals) {
        this.element = document.createElement(tag)
        this.listeners = listeners

        if (parent) this.setParent(parent)

        this.listeners.forEach((listener) => this.addListener(listener))
    }

    addListener(listener: Listener) {
        this.element.addEventListener(listener.name, listener.callback, { once: listener.once || false })
        this.listeners.push(listener)
    }

    removeListener(listener: Listener) {
        this.element.removeEventListener(listener.name, listener.callback)
        this.listeners = this.listeners.filter((l) => l !== listener)
    }

    setParent(parent: HTMLElement | elementGlobals) {
        if (parent instanceof HTMLElement) {
            this.parent = parent
            this.parent.appendChild(this.element)
        } else if (parent === elementGlobals.mainApp) this.parent = elementGlobals.mainApp
    }

    static fromElement(element: HTMLElement, parent?: HTMLElement | elementGlobals): Pen {
        let pen = new Pen(element.tagName)
        pen.element = element
        if (parent) pen.setParent(parent)
        else if (element.parentElement) pen.setParent(element.parentElement!)

        return pen
    }

    static fromHTML(html: HTMLMarkup): Pen[] {
        let element = document.createElement('div')
        element.innerHTML = html

        let baseChildren = element.children
        let allChildren = element.querySelectorAll('*')
        let pens: Pen[] = []

        for (let i = 0; i < baseChildren.length; i++) {
            let pen = Pen.fromElement(baseChildren[i] as HTMLElement, elementGlobals.mainApp)
            pens.push(pen)
        }

        for (let i = 0; i < allChildren.length; i++) {
            let pen = Pen.fromElement(allChildren[i] as HTMLElement)
            pens.push(pen)
        }

        return pens
    }
}

function getPenFromElementId(id: string, pens: Pen[]): Pen {
    let pen = pens.filter((p) => p.element.id === id)[0]
    if (pen) return pen
    else throw new Error(`No pen with id ${id} found.`)
}

export { getPenFromElementId, Listener, Component, Components, Pen, elementGlobals }
