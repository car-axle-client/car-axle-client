// uhoh

import { create_element } from '../../../UILib'
import { UIManager } from '../../../UIManager'
import { get_plugins } from '../../../database'
import { COMMUNITY } from '../../../static/constant'
import { moduleDefinition } from '../../moduleapi'
import './plugins.ts.less'

// gets community plugins
// why is this not lazy loaded u may ask, well its because no one is complaining ;)

//type Plugin = {
//    name: string
//    version: string
//    description: string
//    author: string
//    path: string
//}
//
//async function get_community_plugins(): Promise<Plugin[]> {
//    return await get_plugins()
//}
//
//function handleCardClick(element: HTMLElement, plugin_code: string) {
//    if (element.classList.contains('cac__plugin__card--enabled')) return
//
//    element.classList.toggle('cac__plugin__card--enabled')

// I manually check every plugin for malicious code
//    eval(plugin_code)
//
//    setTimeout(() => {
//        element.classList.toggle('cac__plugin__card--enabled')
//    }, 400)
//}
//
//function create_plugin_card(plugin: Plugin, card_container: HTMLElement) {
//    let card = create_element('div', card_container, {
//        class_name: 'cac__plugin__card',
//    })
//
//    let card_header = create_element('h3', card, {
//        class_name: 'cac__plugin__card__title',
//        innerHTML: plugin.name,
//    })
//
//    let formatted_description = `(v${plugin.version}) ${plugin.description} by ${plugin.author}`
//    let card_description = create_element('p', card, {
//        class_name: 'cac__plugin__card__description',
//        innerHTML: formatted_description,
//    })
//
//    let plugin_code = ''
//
//    fetch(`${COMMUNITY}plugins/${plugin.path}`)
//        .then((response) => response.text())
//        .then((code) => (plugin_code = code))
//    card.addEventListener('mousedown', () => {
//        handleCardClick(card, plugin_code)
//    })
//}
//
//function render(UI: UIManager) {
//    let section_content = UI.getSectionFromID('cheats')?.section_content
//    if (!section_content) return
//
//    let card_container = create_element('div', section_content, {
//        class_name: 'cac__form__container',
//    })
//    let card_header = create_element('h2', card_container, {
//        innerHTML: 'Community Plugins',
//        class_name: 'cac__button__form__title',
//    })
//
//    let plugins = get_community_plugins()
//
//    plugins.then((plugins: Plugin[]) => {
//        for (let plugin of plugins) {
//            create_plugin_card(plugin, card_container)
//        }
//    })
//}
//
//const plugin: moduleDefinition = {
//    custom_render: true,
//    render: render,
//}
//
//export default plugin
