import { Input } from '../../gui/components/content/input.component'
import { Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

function handleConsoleInput(input: string, input_element: HTMLInputElement) {
    try {
        eval(input)
    } catch (e) {
        console.log(e)
    }
    input_element.value = ''
}

function Block(content: Pen[]): Pen[] {
    let pens = Pen.fromHTML(`<div style="
    width: 100%;
    aspect-ratio: 16/9;
    overflow-y: scroll;
    ">
                           
                           </div>`)

    //@ts-ignore
    console.stdlog = console.log.bind(console)
    //@ts-ignore
    console.log = function () {
        //@ts-ignore
        console.stdlog.apply(console, arguments)

        let log = Pen.fromHTML(`<p>(${new Date().toLocaleTimeString()}) ${Array.from(arguments).join(' ') || 'undefined'}</p>`)
        log[0].setParent(pens[0].element)

        pens.push(log[0])
    }

    //@ts-ignore
    console.defaultError = console.error.bind(console)
    //@ts-ignore
    console.error = function () {
        //@ts-ignore
        console.defaultError.apply(console, arguments)

        let log = Pen.fromHTML(`<p style="color: red">(${new Date().toLocaleTimeString()}) ${Array.from(arguments).join(' ') || 'undefined'}</p>`)
        log[0].setParent(pens[0].element)

        pens.push(log[0])
    }

    pens[0].setParent(content[0].element)
    return pens || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'consoleoutputblock',
    function: Block,
}

export default definition
