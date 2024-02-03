import { Component, Pen } from '../../../penexutils'
import { HandlerDefinition } from '../../../types'

export class Button extends Component {
    private parent: Pen
    private handler: HandlerDefinition
    private title: string

    constructor(parent: Pen, title: string, handler: HandlerDefinition) {
        super()

        if (handler.type !== 'button') {
            throw new Error('Handler is not a module')
        }

        this.handler = handler
        this.parent = parent
        this.title = title
    }

    public penIt(): Pen[] {
        let pens = Pen.fromHTML(`
                                <div class="cac-button rounded-md">
                                    <h2>
                                        ${this.title}
                                    </h2>
                                </div>`)

        try {
            pens[0].setParent(this.parent.element)
            pens[0].element.addEventListener('mousedown', this.mouseDownHandler.bind(this))
        } catch (e) {
            console.error(e)
        }
        this.pens = pens
        return pens
    }

    public mouseDownHandler(): void {
        // @ts-ignore -> type is module so it has a function with no args
        this.handler.handler()
    }
}
