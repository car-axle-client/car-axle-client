// GO TO THEIR REPO
//
//
// https://github.com/MarcellPerger1/adblock-bookmarklet
//
//
//

import { moduleDefinition } from '../../moduleapi'

function adblock() {
    console.log('LICENSE AGREEMENT: The code used is under the MIT LICENSE')
    fetch('https://raw.githubusercontent.com/MarcellPerger1/adblock-bookmarklet/main/dist/release/bookmarklet.min.txt')
        .then((r) => r.text())
        .then((r) => eval(r))
}

const plugin: moduleDefinition = {
    custom_render: false,
    display_name: 'Adblock',
    id: 'adblock',
    description: 'Removes advertisements from the website. (by <a href="https://github.com/MarcellPerger1" target="_blank">MarcellPerger1</a>)',
    section: 'cheats',
    reset: true,
    onactive: adblock,
}

export default plugin
