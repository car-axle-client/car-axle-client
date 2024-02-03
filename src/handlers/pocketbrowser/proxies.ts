import { getJSON } from '../../database'
import { Button } from '../../gui/components/content/button.component'
import { Pen } from '../../penexutils'
import { HandlerDefinition, Proxies } from '../../types'

function switchProxy(url: string) {
    ;(document.getElementById('pocketbrowseriframe') as HTMLIFrameElement)!.src = atob(url)
}

function Block(content: Pen[]): Pen[] {
    let pens: Pen[] = Pen.fromHTML(`
                                   <div>
                                        <h1>Proxies</h1>
                                    </div>
                                    `)

    getJSON<Proxies>('special.json').then(
        (proxies: Proxies) => {
            let button = new Button(pens[0], 'Switch To Random Proxy', {
                type: 'button',
                id: 'switchproxy',
                handler: () => {
                    switchProxy(proxies.normal[Math.floor(Math.random() * proxies.normal.length)])
                }}).penIt()
                if (!button) {
                    throw new Error('Button is not defined')
                }
                pens.push(
                    ...button
                )
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
