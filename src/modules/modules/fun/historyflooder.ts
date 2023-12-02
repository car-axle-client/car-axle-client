import { moduleDefinition } from '../../moduleapi'

async function floodHistory() {
    let i = 0
    while (i < 50000) {
        history.pushState(0, '', i.toString())
        i++
    }
    history.pushState(0, '', window.location.href)
}

function historyFlooder() {
    floodHistory().then(() => {
        alert('Flooded History 10k times!')
    })
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
