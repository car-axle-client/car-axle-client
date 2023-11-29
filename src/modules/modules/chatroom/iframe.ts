import { moduleDefinition, new_iframe } from '../../moduleapi'
import '../../../static/iframe.less'
import { UIManager } from '../../../UIManager'

function render(UI: UIManager) {
    let section_content = UI.getSectionFromID('chat')?.section_content
    if (!section_content) return

    let iframe = new_iframe(UI, section_content, atob('aHR0cHM6Ly9vcmdhbml6YXRpb25zLm1pbm5pdC5jaGF0LzcxMzIyNjQ1MTIxMTIzNy9jL2dlbmVyYWw/ZW1iZWQmbmlja25hbWU9'))
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
