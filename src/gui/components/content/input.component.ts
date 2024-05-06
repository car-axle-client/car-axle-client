import { Component, Elements, Pen } from '../../../penexutils'
import { HandlerDefinition } from '../../../types'

export class Input implements Component {
    pens: Pen<HTMLElement>[] = []
    private parent: Pen<HTMLElement>
    private handler: HandlerDefinition
    private placeholder: string

    constructor(parent: Pen<HTMLElement>, handler: HandlerDefinition, placeholder: string = '') {
        if (handler.type !== 'input') {
            throw new Error('Handler is not a Input')
        }
        this.handler = handler
        this.parent = parent
        this.placeholder = placeholder
    }

    public penIt(): Pen<Elements>[] {
        let pens = Pen.fromHTML(`<input type="text" id="${this.handler.id}" placeholder="${this.placeholder}" class="cac-input rounded-md">`)
        pens[0].setParent(this.parent.element)
        pens[0].element.addEventListener('change', () => {
            try {
                this.handleInput((pens[0].element as HTMLInputElement).value)
            } catch (e) {
                console.error('Input Handler Failed:' + e)
            }
        })

        this.pens = pens
        return pens
    }

    public handleInput(input: string): void {
        if (this.handler.type !== 'input') {
            throw new Error('Handler is not a module')
        }
        this.handler.handler && this.handler.handler(input, this.pens[0].element as HTMLInputElement)
    }
}
