import { moduleDefinition, new_iframe } from '../../moduleapi'
import '../../../static/iframe.less'
import { UIManager } from '../../../UIManager'
import { create_element } from '../../../UILib'

function render(UI: UIManager) {
    let section_content = UI.getSectionFromID('chat')?.section_content
    if (!section_content) return

    // Assuming section_content is a DOM element
    const widgetbotElement = document.createElement('widgetbot');
    widgetbotElement.setAttribute('server', '1143730031533768726');
    widgetbotElement.setAttribute('channel', '1182483663905103882');
    widgetbotElement.setAttribute('width', '800');
    widgetbotElement.setAttribute('height', '600');

    // Create script element
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/html-embed';

    // Append both elements to section_content
    section_content.appendChild(widgetbotElement);
    section_content.appendChild(scriptElement);
    
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
