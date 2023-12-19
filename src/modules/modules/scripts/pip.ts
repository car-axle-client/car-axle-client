import { moduleDefinition } from '../../moduleapi'

function pip() {
    fetch('https://raw.githubusercontent.com/Krazete/bookmarklets/master/min/pop.min.js')
        .then((r) => r.text())
        .then((r) => eval(r))
}

const plugin: moduleDefinition = {
    custom_render: false,
    display_name: 'Picture in Picture',
    id: 'pip',
    description: 'Puts the first video element picture in picture (By <a href="https://github.com/Krazete">Krazete</a>)',
    section: 'cheats',
    reset: true,
    onactive: pip,
}

export default plugin
