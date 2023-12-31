// types and everything

export type sectionInfo = {
    id: string
    display_name: string
    description: string
    icon: string
}

export interface Component {
    parent: HTMLElement
    render(): void
}

interface ElementAttributes {
    id?: string
    class_name?: string
    innerHTML?: string
    type?: string
    name?: string
    value?: string
}

export function create_element(tagName: string, parent: Element, options?: ElementAttributes): HTMLElement {
    const element: HTMLElement = document.createElement(tagName)
    if (options) {
        if (options.id) {
            element.id = options.id
        }
        if (options.class_name) {
            element.className = options.class_name
        }
        if (options.innerHTML) {
            element.innerHTML = options.innerHTML
        }
        if (options.type) {
            element.setAttribute('type', options.type)
        }
        if (options.name) {
            element.setAttribute('name', options.name)
        }
        if (options.value) {
            element.setAttribute('value', options.value)
        }
    }

    element.classList.add('cac__ALL')

    if (parent) {
        parent.appendChild(element)
    }

    return element
}
