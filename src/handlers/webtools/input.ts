import { Input } from '../../gui/components/content/input.component'
import { Elements, Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

function handleConsoleInput(input: string, input_element: HTMLInputElement) {
    eval(input)

    input_element.value = ''
}

function Block(content: Pen<HTMLElement>[]): Pen<Elements>[] {
    let pens = Pen.fromHTML(`<div>
                                    <h1 class="divider">js runner</h1>
                           </div>`)

    pens.push(
        ...new Input(
            pens[1],
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
    handler: Block,
}

export default definition
