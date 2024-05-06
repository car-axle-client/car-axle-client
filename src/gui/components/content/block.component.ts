import { Component, Pen } from '../../../penexutils'
import { HandlerDefinition } from '../../../types'

export class Block implements Component {
    private parent: Pen<HTMLElement>
    private handler: HandlerDefinition

    constructor(parent: Pen<HTMLElement>, handler: HandlerDefinition) {
        if (handler.type !== 'block') {
            throw new Error('Handler is not a block')
        }

        this.handler = handler
        this.parent = parent
    }

    public penIt(): Pen<HTMLElement | HTMLInputElement>[] {
        let pens = Pen.fromHTML(`<div class="cac-block rounded-md"></div>`)

        // @ts-ignore -> type is block so it has args and exists
        let content = this.handler.handler(pens)

        Array.isArray(content) && pens.push(...content)

        pens[0].setParent(this.parent.element)
        return pens
    }
}
