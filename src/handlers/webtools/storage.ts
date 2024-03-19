import { Input } from '../../gui/components/content/input.component'
import { Elements, Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'
import '../../styles/webtools.less'

function addItem(key: string | null, value: string | null, parent: Pen<HTMLElement>) {
    let pens = Pen.fromHTML(`<div class="cac-webtools-item">
                                <h3 class="cac-webtools-item-key">${key}</h3>
                                <p class="cac-webtools-item-value">${value}</p>
                            </div>`)
    pens[0].setParent(parent.element)
}

function Block(content: Pen<HTMLElement>[]): Pen<Elements>[] {
    let pens = Pen.fromHTML(`<div>
                                    <h1 class="divider">Web Storage</h1>
                                    <h2>Local Storage</h2>
                                    <div>
                                    </div>
                                    <h2>Session Storage</h2>
                                    <div>
                                    </div>
                           </div>`)

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        key && addItem(key, localStorage.getItem(key), pens[4])
    }

    for (let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i)
        key && addItem(key, sessionStorage.getItem(key), pens[6])
    }

    pens[0].setParent(content[0].element)
    return pens || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'storageblock',
    handler: Block,
}

export default definition
