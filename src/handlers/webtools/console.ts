
import { Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

function Block(content: Pen[]): Pen[] {
    let pen = Pen.fromHTML(`<div>
                           hello world
                           </div>`)
    pen[0].setParent(content[0].element)
    return pen || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'consoleblock',
    function: Block,
}

export default definition
