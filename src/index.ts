// welcome to nextgen
// have fun ;)
// ~ penguinify
//
// car axle client uses a in house ui framework.

import { VERSION, ITERATION, NAME, CREATOR, ENV } from './constants'
import { setup } from './penex'
import './styles/sidebar.less'
import './styles/index.less'
import './styles/utils.less'
import './styles/maincontent.less'

function main() {
    console.info(`${VERSION}.${ITERATION} ${NAME} by ${CREATOR} (${ENV}), thank you from penguinify`)

    document.addEventListener('DOMContentLoaded', () => {
        setup('app-fuk-u')
    })
}

// i hope this works...
main()
