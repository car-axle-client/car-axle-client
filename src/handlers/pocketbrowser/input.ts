import { Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

function formatInput(input: string): string {
    if (!input) {
        input = 'https://google.com/webhp?igu=1'
    } else if (!input.includes('.')) {
        input = `https://google.com/search?q=${input}&igu=1`
    } else if (!input.includes('//')) {
        input = 'https://' + input
    }

    return input
}

function inputhandler(input: string): void {
    input = formatInput(input)
    document.getElementById('pocketbrowseriframe')!.setAttribute('src', input)
}
let definition: HandlerDefinition = {
    type: 'input',
    id: 'pocketbrowserinput',
    handler: inputhandler,
}

export default definition
