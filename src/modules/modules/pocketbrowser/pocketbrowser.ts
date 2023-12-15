import { create_element } from '../../../UILib'
import { UIManager } from '../../../UIManager'
import { moduleDefinition, new_iframe } from '../../moduleapi'
import { getHashFromLocalStorage, saveHashToLocalStorage } from '../../../storage_manager'
import './pocketbrowser.ts.less'
import replacementKeywords from './replace_keywords.json'

function mapKeywords(text: string): string {
    let keywords = replacementKeywords

    for (let keyword of keywords) {
        for (let deleteKeyword of keyword.remove) {
            text = text.replace(deleteKeyword, '')
        }
        // case insensitive
        if (!keyword.replaceAll) {
            text = text.replace(keyword.replace, keyword.with)
        } else if (text.includes(keyword.replace)) {
            text = keyword.with
        }
    }

    return text
}

function formatURL(url: string): string {
    let formattedURL = url

    if (!formattedURL.startsWith('https://')) {
        formattedURL = 'https://' + formattedURL
    }

    if (formattedURL.endsWith('/')) {
        formattedURL = formattedURL.slice(0, -1)
    }

    return formattedURL
}

function render(UI: UIManager) {
    let section = UI.getSectionFromID('pocket')

    if (!section) return

    const iframe_input = create_element('input', section.section_content, {
        class_name: 'cac__pocketbrowser__input',
        type: 'text',
        value: 'https://google.com/webhp?igu=1',
    }) as HTMLInputElement

    let iframe = new_iframe(UI, section.section_content, 'https://bing.com', '', 3)

    iframe.src = getHashFromLocalStorage('pocketbrowser')
    iframe.id = 'cac__pocketbrowser__iframe'

    iframe_input.addEventListener('change', (e) => {
        let link: string = iframe_input.value
        link = formatURL(mapKeywords(link))

        iframe_input.value = link

        if (link === 'https://youtube.com') {
            UI.notificationbar.new_notification('Pocket browser', 'Paste a video link instead of youtube.', 'error')
        }

        saveHashToLocalStorage('pocketbrowser', link)
        iframe.setAttribute('src', `${link}`)
    })
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
