// GO TO THEIR REPO
//
//
// https://github.com/Krazete/bookmarklets/blob/master/piano.js
//
//
//

import { moduleDefinition } from '../../moduleapi'

function piano() {
    console.log('LICENSE AGREEMENT: The code used is UNLICENSED')
    fetch('https://raw.githubusercontent.com/Krazete/bookmarklets/master/min/piano.min.js')
        .then((r) => r.text())
        .then((r) => eval(r))
}

const plugin: moduleDefinition = {
    custom_render: false,
    display_name: 'Piano Bookmarklet',
    id: 'piano',
    description: 'Adds a Piano to your webpage (by <a href="https://github.com/Krazete" target="_blank">Krazete</a>)',
    section: 'cheats',
    reset: true,
    onactive: piano,
}

export default plugin
