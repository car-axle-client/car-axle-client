import { moduleDefinition } from '../../moduleapi'
import {
    VERSION,
    CLIENTNAME,
    AUTHOR,
    SOCIAL,
    LOGO,
} from '../../../static/constant'
import { UIManager } from '../../../UIManager'
import './versionnumber.ts.less'
import { create_element } from '../../../UILib'

function render(UI: UIManager) {
    let client_section = UI.getSectionFromID('client')

    if (!client_section) throw 'Error Rendering: Section Does Not Exist'

    // not an actual button
    let element = create_element('button', client_section.section_content, {
        class_name: 'cac__version__display',
        innerHTML: `
                <h2>${CLIENTNAME} v${VERSION}</h2>
                <h3>by @${AUTHOR}</h3>
                <a href="${SOCIAL['github']}">Github</a>
                <a href="${SOCIAL['discord']}">Discord</a>

`,
    })

    element.style.backgroundImage = `url(${LOGO})`
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
