import { CREATOR, ENV, ITERATION, NAME, VERSION } from '../../constants'
import { Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

function Block(content: Pen<HTMLElement>[]): Pen<HTMLElement>[] {
    let pen = Pen.fromHTML(`<div>
                           <h1>${NAME} by ${CREATOR}</h1>
                           <h2>version ${VERSION}.${ITERATION}</h2>
                           <h2>on ${ENV}</h2>
                           </div>`)
    pen[0].setParent(content[0].element)
    return pen || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'versionblock',
    handler: Block,
}

export default definition
