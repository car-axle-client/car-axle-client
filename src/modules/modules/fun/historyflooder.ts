import { moduleDefinition } from '../../moduleapi'

function historyFlooder() {
    let i = 0
    while (i < 10000) {
        history.pushState(0, '', i.toString())
        i++
    }
    history.pushState(0, '', window.location.href)

    alert('Flooded history 10k times ;)')
}

const plugin: moduleDefinition = {
    custom_render: false,
    display_name: 'History Flooder',
    description: 'Floods your history with current page',
    id: 'historyflooder',
    section: 'fun',
    reset: true,
    onactive: historyFlooder,
}

export default plugin
