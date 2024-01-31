import { Component, Pen } from '../../../penexutils'
import { HandlerDefinition } from '../../../types'

export class Input extends Component {
    private parent: Pen
    private handler: HandlerDefinition
    private placeholder: string

    constructor(parent: Pen, handler: HandlerDefinition, placeholder: string = '') {
        super()

        if (handler.type !== 'input') {
            throw new Error('Handler is not a Input')
        }
        this.handler = handler
        this.parent = parent
        this.placeholder = placeholder
    }

    public penIt(): Pen[] {
        let pens = Pen.fromHTML(`<input type="text" id="${this.handler.id}" placeholder="${this.placeholder}" class="cac-input rounded-md">`)
        pens[0].element = pens[0].element as HTMLInputElement

        pens[0].setParent(this.parent.element)
        pens[0].element.addEventListener('change', () => {
            try {
                //@ts-ignore fuck generics, im to lazy for this
                this.handleInput(pens[0].element.value)
            } catch (e) {
                throw new Error('Input handler failed: ' + e)
            }
        })

        this.pens = pens
        return pens
    }

    public handleInput(input: string): void {
        if (this.handler.type !== 'input') {
            throw new Error('Handler is not a module')
        }
        if (this.handler.handler) {
            this.handler.handler(input, this.pens[0])
        }
    }
}
