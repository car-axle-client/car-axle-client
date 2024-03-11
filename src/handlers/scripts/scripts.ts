import { getJSON } from '../../database'
import { notificationbar } from '../../gui/app'
import { Module } from '../../gui/components/content/module.component'
import { Pen } from '../../penexutils'
import { HandlerDefinition, Script } from '../../types'

function runScript(scripturl: string, patch?: string): void {
    patch && eval(patch)

    fetch(scripturl)
        .then((response) => response.text())
        .then((text) => eval(text))
        .catch((error) => {
            console.error('Unable to load Script:', error)
            notificationbar.showNotification('Unable to load Script', 'This is likely due to website restrictions, please try a different website')
        })
}

function Block(content: Pen<HTMLElement>[]): Pen<HTMLElement>[] {
    let pens: Pen<HTMLElement>[] = []

    getJSON<Script[]>('scripts.json').then(
        (scripts: Script[]) => {
            for (let script of scripts) {
                let module = new Module(content[0], script.name, script.desc + ` by <a href="${script.author.link}" target="_blank">${script.author.name}</a>`, {
                    type: 'module',
                    id: script.name,
                    onEnable: () => {
                        runScript(script.url, script.patch || '')
                    },
                    autoReset: true,
                }).penIt()
                pens.push(...module)
            }
        },
        () => {
            pens = Pen.fromHTML(`<div>
                            <h1>Scripts are UNABLE to be loaded on this website</h1>
                            <h2>Please try a different website!</h2>
                            </div>`)
            pens[0].setParent(content[0].element)
        }
    )

    return pens || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'scriptblock',
    handler: Block,
}

export default definition
