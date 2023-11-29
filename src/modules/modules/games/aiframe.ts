import { UIManager } from '../../../UIManager'
import { moduleDefinition, new_iframe } from '../../moduleapi'
import '../../../static/style.less'

function render(UI: UIManager) {
    let games = UI.getSectionFromID('game')
    if (!games) return

    new_iframe(UI, games.section_content, 'https://penguinify-web-dev.github.io/yourgay.html', 'cac__games__iframe')
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
