import { Section } from "./components/section"
import "./style/style.less"

interface ElementAttributes {
    id?: string
    className?: string
    innerHTML?: string;
}

function createElement(tagName: string, parent: Element, options?: ElementAttributes ): Element {
    const element: Element = document.createElement(tagName)

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

export class UIManager {
    public CONTAINER: Element

    constructor() {
        this.CONTAINER = this._createBackground()
    }

    _createBackground(): Element {
        return createElement('div', document.body,
            {
                id: 'cac__CONTAINER'
            }
        )
    }

}

export function TestUI(): void {
    createElement('h1', document.body, {innerHTML:"penguin"})
}