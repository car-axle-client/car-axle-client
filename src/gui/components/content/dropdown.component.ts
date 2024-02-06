import { Component, Pen } from '../../../penexutils'
import { HandlerDefinition } from '../../../types'

export class Dropdown extends Component {
    private parent: Pen
    private handler: HandlerDefinition
    private options: string[] | number[]

    constructor(parent: Pen, handler: HandlerDefinition, options: string[] | number[]) {
        super()

        if (handler.type !== 'dropdown') {
            throw new Error('Handler is not a dropdown')
        }
        this.handler = handler
        this.parent = parent
        this.options = options
    }

    public penIt(): Pen[] {
        let options = this.options.map((option) => {
            return `<option value="${option}">${option}</option>`
        })
        let pens = Pen.fromHTML(`
                                <select id="${this.handler.id}" class="cac-dropdown rounded-md">
                                    ${options}
                                </select>`)
        pens[0].element = pens[0].element as HTMLSelectElement

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
        if (this.handler.type !== 'dropdown') {
            throw new Error('Handler is not a module')
        }
        if (this.handler.handler) {
            this.handler.handler(input, this.pens[0])
        }
    }
}
