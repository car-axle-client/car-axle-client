import { Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

async function checkIfIframeIsEmbedable(url: string): Promise<boolean> {
return true


}

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
    let iframe = document.getElementById('pocketbrowseriframe') as HTMLIFrameElement
    iframe.setAttribute('src', input)

    checkIfIframeIsEmbedable(input).then((state) => {
        if (state) {
            console.log('Iframe loaded')
        } else {
            iframe.setAttribute('src', `https://placehold.co/${iframe.clientWidth}x${iframe.clientHeight}?text=Cannot+load+this+website,+try+loading+a+different+website.`)
        }
    })
}
let definition: HandlerDefinition = {
    type: 'input',
    id: 'pocketbrowserinput',
    handler: inputhandler,
}

export default definition
