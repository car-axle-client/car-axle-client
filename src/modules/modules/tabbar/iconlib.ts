import { create_element } from '../../../UILib'
import { UIManager } from '../../../UIManager'
import './icon.ts.less'

export function render_icon(UI: UIManager, name: string, action: () => void, icon: string) {
    let icon_element = create_element('button', UI.tabbar, {
        class_name: 'cac__tabbar__button',
        innerHTML: icon,
    })

    icon_element.onclick = action

    create_element('p', icon_element, {
        class_name: 'cac__tabbar__button__hovername',
        innerHTML: name,
    })
}
