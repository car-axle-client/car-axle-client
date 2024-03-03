import { Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

// @skrilll on discord

function Block(content: Pen<HTMLElement>[]): Pen<HTMLElement>[] {
    let pens = Pen.fromHTML(`
        <div class="rounded-md bg-gray-800 p-4 m-4">
            <h1>Builtin Proxies</h1>
            <p>stored in the codebase (use this if you see an error above)</p>
        `)

    pens[0].setParent(content[0].element)
    return pens || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'localproxyblock',
    handler: Block,
}

export default definition
