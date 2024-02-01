import { getJSON } from '../../database'
import { Module } from '../../gui/components/content/module.component'
import { Pen } from '../../penexutils'
import { HandlerDefinition, Script } from '../../types'

// function createModuleFromJSON(json: any): Pen[] {}

function runScript(scripturl: string, patch?:string): void {
    patch && eval(patch)

    fetch(scripturl)
        .then((response) => response.text())
        .then((text) => eval(text))
}

function Block(content: Pen[]): Pen[] {
    let pens: Pen[] = []

    try {
        getJSON<Script[]>('scripts.json').then((scripts: Script[]) => {
            for (let script of scripts) {
                let module = new Module(content[0], script.name, script.desc + ` by <a href="${script.author.link}" target="_blank">${script.author.name}</a>`, { type: 'module', id: script.name, onEnable: () => {runScript(script.url, script.patch || "")}, autoReset: true }).penIt()
                pens.push(...module)
            }
        })
    } catch (e) {
        console.error(e)

        pens = Pen.fromHTML(`<div>
                           <h1>Scripts are UNABLE to be loaded on this website</h1>
                           <h2>Please try a different website!</h2>
                           </div>`)
        pens[0].setParent(content[0].element)
    }

    return pens || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'scriptblock',
    function: Block,
}

export default definition
