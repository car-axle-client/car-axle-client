// GO TO THEIR REPO
//
//
// https://github.com/ading2210/edpuzzle-answers
//
//
//

import { moduleDefinition } from "../../moduleapi"

function edpuzzle() {
    fetch("https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js").then(r => r.text()).then(r => eval(r))
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

export default plugin;
