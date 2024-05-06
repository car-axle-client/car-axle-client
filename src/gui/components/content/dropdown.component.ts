import { Component, Elements, Pen } from '../../../penexutils'
import { DropdownOptions, HandlerDefinition } from '../../../types'

export class Dropdown implements Component {
    pens: Pen<HTMLElement>[] = []
    private parent: Pen<HTMLElement>
    private handler: HandlerDefinition
    private options: DropdownOptions

    constructor(parent: Pen<HTMLElement>, handler: HandlerDefinition, options: DropdownOptions) {
        if (handler.type !== 'dropdown') {
            throw new Error('Handler is not a dropdown')
        }
        this.handler = handler
        this.parent = parent
        this.options = options
    }

    public penIt(): Pen<Elements>[] {
        let options = ''

        // the keys are the optgroups and the values are the options
        for (let key in this.options) {
            options += `<optgroup label="${key}">`
            for (let value of this.options[key]) {
                options += `<option value="${value}">${value}</option>`
            }
            options += `</optgroup>`
        }

        let pens = Pen.fromHTML(`
                                <select id="${this.handler.id}" class="cac-dropdown rounded-md">
                                    ${options}
                                </select>`)

        pens[0].setParent(this.parent.element)
        pens[0].element.addEventListener('change', () => {
            try {
                this.handleInput((pens[0].element as HTMLInputElement).value)
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
        this.handler.handler && this.handler.handler(input, this.pens[0])
    }
}
