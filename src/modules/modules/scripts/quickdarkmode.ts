import { moduleDefinition } from '../../moduleapi'

function simpledarkmode() {
    fetch('https://raw.githubusercontent.com/legend7278/Bookmarklets/main/Simple%20dark%20mode')
        .then((r) => r.text())
        .then((r) => eval(r))
}

const plugin: moduleDefinition = {
    custom_render: false,
    display_name: 'Simple Dark Mode',
    id: 'simpledarkmode',
    description: 'Dark yes (By Unknown)',
    section: 'cheats',
    reset: true,
    onactive: simpledarkmode,
}

export default plugin
