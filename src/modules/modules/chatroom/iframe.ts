import { moduleDefinition, new_iframe } from '../../moduleapi'
import '../../../static/iframe.less'
import { UIManager } from '../../../UIManager'
import { create_element } from '../../../UILib'

function render(UI: UIManager) {}

function onShow(UI: UIManager) {
    const section_content = UI.getSectionFromID('chat')?.section_content
    if (!section_content) return
    const widgetbotElement = document.createElement('widgetbot')
    widgetbotElement.setAttribute('server', '1143730031533768726')
    widgetbotElement.setAttribute('channel', '1172763447256166420')
    widgetbotElement.setAttribute('width', '800')
    widgetbotElement.setAttribute('height', '600')

    const scriptElement = document.createElement('script')
    scriptElement.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/html-embed'

    if (!section_content) return

    section_content.appendChild(widgetbotElement)
    section_content.appendChild(scriptElement)
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
    onShow: ['chat', onShow],
}

export default plugin
