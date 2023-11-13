// GO TO THEIR REPO
//
//
// https://github.com/penguinify/math-bookmarklet
//
//
//

import { moduleDefinition } from '../../moduleapi'

function math() {
    fetch(
        'https://raw.githubusercontent.com/Penguinify/math-bookmarklet/main/dist/bundle.js'
    )
        .then((r) => r.text())
        .then((r) => eval(r))
}

const plugin: moduleDefinition = {
    custom_render: false,
    display_name: 'Math Solver',
    id: 'edpuzzle',
    description:
        'Factor, simplify, and solve (By <a href="https://github.com/penguinify/math-bookmarklet">Penguinify</a>)',
    section: 'cheats',
    reset: true,
    onactive: math,
}

export default plugin
