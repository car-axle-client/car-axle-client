import { moduleDefinition } from '../../moduleapi'

function invert() {
    fetch('https://raw.githubusercontent.com/legend7278/Bookmarklets/main/Invert%20webpage%20colors')
        .then((r) => r.text())
        .then((r) => eval(r))
}

const plugin: moduleDefinition = {
    custom_render: false,
    display_name: 'Invert Webpage',
    id: 'invert',
    description: 'Inverts the colors of the webpage (By <a href="https://github.com/Krazete">Krazete</a>)',
    section: 'cheats',
    reset: true,
    onactive: invert,
}

export default plugin
