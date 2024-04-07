import { Elements, Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'
import '../../styles/webtools.less'
import { Button } from '../../gui/components/content/button.component'
import { notificationbar } from '../../gui/app'

function addItem(key: string | null, value: string | null, parent: Pen<HTMLElement>) {
    let pens = Pen.fromHTML(`<div class="cac-webtools-item">
                                <h3 class="cac-webtools-item-key">${key}</h3>
                                <p class="cac-webtools-item-value">${value}</p>
                            </div>`)
    pens[0].setParent(parent.element)
}

function ResetAndAddAllItems(parentLocalStorage: Pen<HTMLElement>, parentSessionStorage: Pen<HTMLElement>) {
    parentLocalStorage.element.innerHTML = ''
    parentSessionStorage.element.innerHTML = ''
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        key && addItem(key, localStorage.getItem(key), parentLocalStorage)
    }
    for (let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i)
        key && addItem(key, sessionStorage.getItem(key), parentSessionStorage)
    }
}

function Block(content: Pen<HTMLElement>[]): Pen<Elements>[] {
    let pens = Pen.fromHTML(`<div>
                                    <h1>Web Storage</h1>
                                    <h2>Local Storage</h2>
                                    <div>
                                    </div>
                                    <h2>Session Storage</h2>
                                    <div>
                                    </div>
                           </div>`)

    let reloadButton = new Button(pens[0], 'Reload Data', { type: 'button', id: 'reloadwebstorage', handler: () => ResetAndAddAllItems(pens[3], pens[5]) })
    let clearAllButton = new Button(pens[0], 'Clear All', {
        type: 'button',
        id: 'clearallwebstorage',
        handler: () => {
            localStorage.clear()
            sessionStorage.clear()
            ResetAndAddAllItems(pens[3], pens[5])
            notificationbar.showNotification('Cleared All', 'Cleared all local and session storage')
        },
    })

    ResetAndAddAllItems(pens[3], pens[5])

    pens[0].setParent(content[0].element)
    pens.push(...reloadButton.penIt())
    pens.push(...clearAllButton.penIt())
    return pens || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'storageblock',
    handler: Block,
}

export default definition
