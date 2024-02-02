import { Input } from '../../gui/components/content/input.component'
import { Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

function handleConsoleInput(input: string, input_element: HTMLInputElement) {
    eval(input)

    input_element.value = ''
}

function Block(content: Pen[]): Pen[] {
    let pens = Pen.fromHTML(`<div>
                           
                           </div>`)

    pens.push(
        ...new Input(
            pens[0],
            {
                type: 'input',
                id: 'consoleInput',
                handler: handleConsoleInput,
            },
            'run js here'
        ).penIt()
    )

    pens[0].setParent(content[0].element)
    return pens || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'consoleinputblock',
    function: Block,
}

export default definition
