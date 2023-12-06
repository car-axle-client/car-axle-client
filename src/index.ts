// All files in src are licsensed under GPLv3 unless otherwise stated
// (c) 2023 car axle client contributors and @penguinify
// Please respect the license or you may recieve a DMCA takedown
// Thank you for using car axle client!

import { UIManager } from './UIManager'
import { get_main_notification, get_update } from './database'
import { ITERATION, VERSION } from './static/constant'
import { load_module_values } from './storage_manager'
import { send_to_discord } from './log'
import sectionsJSON from './static/sections.json'

if (document.getElementById('cac__CONTAINER')) {
    alert('Car Axle Client is already running!')
    throw new Error('Car Axle Client is already running!')
}

if (window.location.href.includes('car-axle-client.github.io/car-axle-client')) {
    alert(
        'This is the BETA VERSION of car axle client. Expect things not to work and features to be lacking depth or etc. Still you should report bugs to discord or through the client/tabclock section'
    )
}

send_to_discord(`car axle client - v${VERSION}.${ITERATION}` + '\n' + 'Current URL: ' + window.location.href)

const modules: any = {}
let context = require.context('./modules/modules', true, /\.ts$/)
context.keys().forEach((key: any) => (modules[key] = context(key)))

function main(): void {
    // License information
    console.log('Car Axle Client is licensed under the GPLv3 license. You can find the license here: https://raw.githubusercontent.com/car-axle-client/car-axle-client/main/LICENSE')

    const UI: UIManager = new UIManager()

    for (let section of sectionsJSON) {
        UI.newSection(section.id, section.display_name, section.description, section.icon)
    }

    modules && UI.addModulesFromImport(modules)
    load_module_values(UI)

    document.addEventListener('keydown', (e) => {
        if (e.key == '\\') {
            UI.toggleUI()
        }
    })

    get_update(UI.container)
    get_main_notification(UI.container)
    console.info(`car axle client - v${VERSION}.${ITERATION}`)
}

main()
