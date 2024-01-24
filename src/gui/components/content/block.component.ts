import { Component, Pen } from '../../../penexutils'
import { HandlerDefinition } from '../../../types'

export class Block extends Component {
    private parent: Pen
    private handler: HandlerDefinition

    constructor(parent: Pen, handler: HandlerDefinition) {
        super()

        if (handler.type !== 'block') {
            throw new Error('Handler is not a block')
        }
        this.handler = handler
        this.parent = parent
    }

    public penIt(): Pen[] {
        let pens = Pen.fromHTML(`<div class="cac-block rounded-md"></div>`)

        // @ts-ignore -> type is block so it has args and exists
        let content = this.handler.function(pens)

        Array.isArray(content) && pens.push(...content)

        pens[0].setParent(this.parent.element)
        return pens
    }
}
