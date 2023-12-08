import { create_element } from '../../../UILib'
import { UIManager } from '../../../UIManager'
import { moduleDefinition, new_iframe } from '../../moduleapi'
import { getHashFromLocalStorage, saveHashToLocalStorage } from '../../../storage_manager'
import './pocketbrowser.ts.less'
import replacementKeywords from './replace_keywords.json'
import bookmarks from './bookmarks.json'

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

function render_bookmarks(bookmark_container: HTMLElement, iframe: HTMLIFrameElement) {
    for (let bookmark of bookmarks) {
        let bookmark_element = create_element('button', bookmark_container, {
            class_name: 'cac__pocketbrowser__bookmark',
            innerHTML: bookmark.shorthand
        })

        bookmark_element.addEventListener('click', () => {
            iframe.setAttribute('src', bookmark.link)
        })
    }
}

function render(UI: UIManager) {
    let section = UI.getSectionFromID('pocket')

    if (!section) return

    const iframe_input = create_element('input', section.section_content, {
        class_name: 'cac__pocketbrowser__input',
        type: 'text',
        value: 'https://google.com/webhp?igu=1',
    }) as HTMLInputElement

    const bookmarks_container = create_element('div', section.section_content, {
        class_name: 'cac__pocketbrowser__bookmarks__container',
    })


    let iframe = new_iframe(UI, section.section_content, 'https://bing.com', '', 3)

    render_bookmarks(bookmarks_container, iframe)

    iframe.src = getHashFromLocalStorage('pocketbrowser')
    iframe_input.value = iframe.src
    iframe.id = 'cac__pocketbrowser__iframe'

    iframe_input.addEventListener('change', (e) => {
        let link: string = iframe_input.value
        link = formatURL(mapKeywords(link))

        iframe_input.value = link

        if (link === 'https://youtube.com') {
            alert('Paste a link to a video instead!')
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
