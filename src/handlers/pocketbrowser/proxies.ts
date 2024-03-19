import { getJSON } from '../../database'
import { notificationbar } from '../../gui/app'
import { Button } from '../../gui/components/content/button.component'
import { Dropdown } from '../../gui/components/content/dropdown.component'
import { Pen } from '../../penexutils'
import { HandlerDefinition, Proxies } from '../../types'

function moveLetter(letter: string, shift: number) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    if (letter.match(/[A-Za-z]/)) {
        const start = letter === letter.toUpperCase() ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0)
        return String.fromCharCode(start + ((letter.charCodeAt(0) - start + shift) % 26))
    }
    return letter
}

export function switchProxy(url: string) {
    let test = url.split('').map((letter) => moveLetter(letter, -3))
    notificationbar.showNotification('Proxy Switched', `Switched to ${test.join('')}`)

    if (!url.startsWith('http')) {
        notificationbar.showNotification('Invalid Proxy', 'The proxy url is invalid')
        return
    }

    ;(document.getElementById('pocketbrowseriframe') as HTMLIFrameElement)!.src = url
}

function Block(content: Pen<HTMLElement>[]): Pen<HTMLElement>[] {
    let pens: Pen<HTMLElement>[] = Pen.fromHTML(`
                                   <div>
                                        <h1>External Proxies</h1>
                                        <p>stored on a database and might not work on some websites</p>
                                    </div>
                                    `)

    getJSON<Proxies>('special.json').then(
        (proxies: Proxies) => {
            let proxyIdDropdown = new Dropdown(
                pens[0],
                {
                    type: 'dropdown',
                    id: 'proxydropdown',
                    handler: (value) => {
                        switchProxy(proxies.normal[parseInt(value)])
                    },
                },
                {
                    Proxies: proxies.normal.map((_proxy, index) => index.toString()),
                }
            ).penIt()

            pens.push(
                ...new Button(pens[0], 'Switch To Random Proxy', {
                    type: 'button',
                    id: 'switchproxy',
                    handler: () => {
                        let value = Math.floor(Math.random() * proxies.normal.length).toString()
                        ;(proxyIdDropdown[0].element as HTMLSelectElement).value = value
                        switchProxy(proxies.normal[Math.floor(Math.random() * proxies.normal.length)])
                    },
                }).penIt()
            )

            pens.push(
                ...Pen.fromHTML(`
                                      <h2> Switch to a specific proxy </h2>
                                      `)
            )

            pens.push(...proxyIdDropdown)
        },
        () => {
            let fallback = Pen.fromHTML(`
                <h2>Unable to load proxies. Try using a different website</h2>
            `)
            fallback[0].setParent(pens[0].element)

            pens.push(fallback[0])
        }
    )

    pens[0].setParent(content[0].element)
    return pens || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'proxiesblock',
    handler: Block,
}

export default definition
