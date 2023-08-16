export interface Component {
    parent: HTMLElement;
    render(): void;
}

interface ElementAttributes {
    id?: string
    className?: string
    innerHTML?: string;
}

export function createElement(tagName: string, parent: Element, options?: ElementAttributes ): HTMLElement {
    const element: HTMLElement = document.createElement(tagName)

    if (options) {
        if (options.id) {
            element.id = options.id
        }
        if (options.className) {
            element.className = options.className
        }
        if (options.innerHTML) {
            element.innerHTML = options.innerHTML
        }
    }

    if (parent) {
        parent.appendChild(element);
    }

    return element;
}