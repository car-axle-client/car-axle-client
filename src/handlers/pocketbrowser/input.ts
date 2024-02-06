import { Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

function checkIfIframeIsLoaded(iframe: HTMLIFrameElement): boolean {
     var html = null;
    try { 
      // @ts-ignore on purpose for the error to work and im to lazy for a normal check
      var doc = iframe.contentDocument || iframe.contentWindow.document;
      html = doc.body.innerHTML;
    } catch(err){
      // do nothing
    }

    return(html !== null);
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

    setTimeout(() => {

        if (!checkIfIframeIsLoaded(iframe)) {
            iframe.setAttribute('src', `https://placehold.co/${iframe.clientWidth}x${iframe.clientHeight}?text=Cannot+load+this+website,+try+loading+a+different+website.`)
        }
    }, 500)
}
let definition: HandlerDefinition = {
    type: 'input',
    id: 'pocketbrowserinput',
    handler: inputhandler,
}

export default definition
