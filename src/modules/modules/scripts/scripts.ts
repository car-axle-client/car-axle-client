// Modern implementation of a module packager
import scriptsJSON from './scripts.json'
import { moduleDefinition } from '../../moduleapi'

type scriptJSON = {
    name: string
    desc: string
    author: { name: string; link: string }
    url: string
    // Patches for stuff like edpuzzle cheat and etc, gets eval before running url
    patch?: string
}

function runScript(url: string, patch: string): void {
    console.log('THE CODE BEING RAN IS NOT MADE BY ME OR BEEN MODIFIED IN ANY WAY. PLEASE RESPECT THE ORIGINAL OWNERS LICENSE')

    // be scared.
    eval(patch)

    fetch(url)
        .then((r) => r.text())
        .then((r) => eval(r))
}

function formatJSONtoModuleDefinition(json: scriptJSON): moduleDefinition {
    return {
        display_name: json.name,
        description: json.desc + `(by <a href="${json.author.link}">${json.author.name}</a>)`,
        section: 'cheats',
        reset: true,
        id: 'fml',
        custom_render: false,
        onactive: () => runScript(json.url, json.patch || ''),
    }
}

let scripts: moduleDefinition[] = scriptsJSON.map((script) => formatJSONtoModuleDefinition(script))
console.log(scripts)

export default scripts
