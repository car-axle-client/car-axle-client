// All files in src are licenced under GPLv3 unless otherwise stated
// (c) 2023 car axle client contributors and @penguinify
// Please respect the license or you may recieve a DMCA takedown
// Thank you for using car axle client!

import { UIManager } from './UIManager'
import { get_main_notification, get_update } from './database'
import { ITERATION, VERSION } from './static/constant'
import { load_module_values } from './storage_manager'
import { send_to_discord } from './log'
import sectionsJSON from './static/sections.json'
import { moduleDefinition } from './modules/moduleapi'

if (window.location.href.includes('car-axle-client.github.io/car-axle-client')) {
    alert(
        'This is the BETA VERSION of car axle client. Expect things not to work and features to be lacking depth or etc. Still you should report bugs to discord or through the client/tabclock section'
    )
}

// no spamming discord <3
if (!window.location.href.includes('localhost')) send_to_discord(`car axle client - v${VERSION}.${ITERATION}` + '\n' + 'Current URL: ' + window.location.href)

// Gets all the modules from the modules folder
type Module = {
    [key: string]: moduleDefinition | moduleDefinition[]
}

const modules: Module = {}
let context = require.context('./modules/modules', true, /\.ts$/)
context.keys().forEach((key: string) => (modules[key] = context(key)))

function main(): void {
    // License information
    console.log('Car Axle Client is licensed under the GPLv3 license. You can find the license here: https://raw.githubusercontent.com/car-axle-client/car-axle-client/main/LICENSE')

    const UI: UIManager = new UIManager()

    for (let section of sectionsJSON) {
        UI.newSection(section.id, section.display_name, section.description, section.icon)
    }

    modules && UI.addModulesFromImport(modules)
    // Loads all the modules from the local storage. (this is where the module ids come in clutch)
    load_module_values(UI)

    // Toggle UI with \
    document.addEventListener('keydown', (e) => {
        if (e.key == '\\') {
            UI.toggleUI()
        }
    })

    get_update(UI.container)
    get_main_notification(UI.container)

    console.info(`car axle client - v${VERSION}.${ITERATION} ;) if u see this and you want to develop hmu on discord (penguinify) idc how bad you are cause no one want to help develop atm`)
}

main()
