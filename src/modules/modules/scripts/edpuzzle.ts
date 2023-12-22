// GO TO THEIR REPO
//
//
// https://github.com/ading2210/edpuzzle-answers
//
//
// Edpuzzle Answers is licensed under the GPL 3.0 license
// You can find the license here: https://github.com/ading2210/edpuzzle-answers/blob/main/LICENSE
// I have made no changes to the code, and I am not the author of the code
// The code is sourced from cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js

import { moduleDefinition } from '../../moduleapi'

function edpuzzle() {
    console.log(
        'Edpuzzle Answers is licensed under the GPL 3.0 license. I have made no changes to the code, and I am not the author of the code. The code is sourced from cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js. View the license here: https://github.com/ading2210/edpuzzle-answers/blob/main/LICENSE'
    )
    // Fixes edpuzzle bug
    var thumbnail

    fetch('https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js')
        .then((r) => r.text())
        .then((r) => eval(r))
}

const plugin: moduleDefinition = {
    custom_render: false,
    display_name: 'Edpuzzle Answers',
    id: 'edpuzzle',
    description: 'Gives you the answers to edpuzzle (By <a href="https://github.com/ading2210/edpuzzle-answers">ading2210</a>)',
    section: 'cheats',
    reset: true,
    onactive: edpuzzle,
}

export default plugin
