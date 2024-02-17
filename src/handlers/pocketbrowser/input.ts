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

    // changes yt links into embed links
    if (input.includes('youtube.com/watch?v=')) {
        input = input.replace('youtube.com/watch?v=', 'youtube.com/embed/')
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
