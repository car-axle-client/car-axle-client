import { Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

function formatInput(input: string): string {
    input = input.trim().toLowerCase()
    if (!input) {
        input = 'https://google.com/webhp?igu=1'
    } else if (!input.includes('.')) {
        input = `https://google.com/search?q=${input}&igu=1`
    } else if (!input.includes('//')) {
        input = 'https://' + input
    }

    if (input === 'https://google.com') {
        input = 'https://google.com/webhp?igu=1'
    }

    return input
}

function inputhandler(input: string): void {
    input = formatInput(input)
    let iframe = document.getElementById('pocketbrowseriframe') as HTMLIFrameElement
    iframe.setAttribute('src', input)
}
let definition: HandlerDefinition = {
    type: 'input',
    id: 'pocketbrowserinput',
    handler: inputhandler,
}

export default definition
