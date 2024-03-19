// welcome to nextgen
// have fun ;)
// ~ penguinify
// jk ik u wont have fun

import { VERSION, ITERATION, NAME, CREATOR, ENV } from './constants'
import { setup } from './penex'
import './styles/sidebar.less'
import './styles/index.less'
import './styles/utils.less'
import './styles/maincontent.less'
import './styles/content.less'
import { checkForUpdate, track } from './database'
import { layout } from './gui/layout'
import { components, notificationbar } from './gui/app'

function main() {
    track()
    console.info(`${VERSION}.${ITERATION} ${NAME} by ${CREATOR} (${ENV}), thank you from penguinify`)
    if (ENV === 'development') {
        console.warn('car axle client development mode is enabled, your cool to do whatever you want ;)')
        notificationbar.showNotification('Development Mode', 'car axle client development mode is enabled, your cool to do whatever you want ;)')
    }

    setup('app-fuk-u', layout, components)

    checkForUpdate().then((update: boolean) => {
        if (update) {
            console.warn('Client outdated, please install the latest version!')
            notificationbar.showNotification("You're on an outdated version!", `Update to the latest version. (Currently on v${VERSION}.${ITERATION})`)
        }
    })

    const header = document.getElementById('app-status')
    const app = document.getElementById('app-fuk-u')

    if (!app || !header) {
        return
    }

    notificationbar.showNotification(`car axle client`, `welcome to ${NAME} v${VERSION}.${ITERATION} by penguinify. enjoy your stay ;)`)

}

// i hope this works...
main()
