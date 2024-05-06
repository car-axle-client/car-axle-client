import { DeviceType, Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

function Block(content: Pen<HTMLElement>[]): Pen<HTMLElement>[] {
    let pen = Pen.fromHTML(`<div>

                            <h1>IS PHONE: ${DeviceType.phone}</h1>
                            <h1>IS TABLET: ${DeviceType.tablet}</h1>
                           </div>`)

    pen[0].setParent(content[0].element)
    return pen || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'typeblock',
    handler: Block,
}

export default definition
