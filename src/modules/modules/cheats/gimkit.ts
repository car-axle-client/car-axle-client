// GO TO THEIR REPO
//
//
// https://github.com/penguinify/math-bookmarklet
//
//
//

import { moduleDefinition } from '../../moduleapi'

function gimkit() {
    console.log(
        'LICENSE AGREEMENT: I have been given explicit permission to use this code by the author of this code.'
    )
    fetch(
        'https://raw.githubusercontent.com/Penguinify/gimkit-hacks/main/dist/bundle.js'
    )
        .then((r) => r.text())
        .then((r) => eval(r))
}

const plugin: moduleDefinition = {
    custom_render: false,
    display_name: 'Gimkit-Hacks',
    id: 'gimkit',
    description:
        'Gimkit answer saver (Only works on classic mode) (By <a href="https://github.com/Penguinify/gimkit-hacks">Penguinify</a>)',
    section: 'cheats',
    reset: true,
    onactive: gimkit,
}

export default plugin
