import { moduleDefinition } from '../../moduleapi'
import { UIManager } from '../../../UIManager'
import gamesJSON from './games.json'
import { create_element } from '../../../UILib'
import '../../module.less'
import '../../../components/button.ts.less'
import './games.ts.less'
import { send_to_discord } from '../../../log'
import { GAMESLINK } from '../../../static/constant'
import { saveHashToLocalStorage } from '../../../storage_manager'
import NotificationBar from '../../../components/notificationbar'

type Game = {
    name: string
    url: string
}

let gamelink: string = GAMESLINK.defaultLink

function changeGame(url: string) {
    const iframe = document.getElementById('cac__games__iframe') as HTMLIFrameElement
    iframe.setAttribute('src', atob(gamelink) + url)
}

// Local storage
function saveCurrentLink() {
    saveHashToLocalStorage('gamelink', gamelink)
}

function changeGameLink(url: string, notificationBar: NotificationBar) {
    gamelink = url
    saveCurrentLink()
    send_to_discord(`Changed game link to ${url}`)
    notificationBar.new_notification('Changed game link', 'Try clicking on a game.')
}

function createGame(gamesSection: HTMLElement, name: string, url: string) {
    const container = create_element('button', gamesSection, {
        class_name: 'cac__game__button',
    })

    container.addEventListener('mousedown', function (e) {
        changeGame(url)
        gamesSection.scrollTop = 100
        send_to_discord(`Changed game to '${name}'`)
    })

    const title = create_element('p', container, {
        class_name: 'cac__game__title',
        innerHTML: name,
    })
}

function createAlternateLinks(notificationBar: NotificationBar, container: HTMLElement) {
    for (const link of GAMESLINK.alternate_links) {
        const button = create_element('button', container, {
            class_name: 'cac__button',
            innerHTML: link.display,
        })

        button.addEventListener('mousedown', function (e) {
            changeGameLink(link.url, notificationBar)
        })
    }
}

function createCustomLinksSelection(notificationBar: NotificationBar, gamesSection: HTMLElement) {
    const container = create_element('div', gamesSection, {
        class_name: 'cac__module__form',
    })

    const title = create_element('h1', container, {
        class_name: 'cac__module__form__title',
        innerHTML: 'Switch game links',
    })

    const defaultSelection = create_element('button', container, {
        class_name: 'cac__button',
        innerHTML: "Default link (doesn't work in v8 rn, use an alternate link) ************.fun",
    })

    createAlternateLinks(notificationBar, container)

    const customSelection = create_element('input', container, {
        class_name: 'cac__module__input',
        value: 'Set to custom link',
    }) as HTMLInputElement

    defaultSelection.addEventListener('mousedown', function (e) {
        changeGameLink(GAMESLINK.defaultLink, notificationBar)
    })

    customSelection.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            if (!customSelection.value.endsWith('/')) {
                customSelection.value += '/'
            }
            changeGameLink(btoa(customSelection.value), notificationBar)
        }
    })
}

function render(UI: UIManager) {
    const gamesSection = UI.getSectionFromID('game')?.section_content

    if (!gamesSection) return

    createCustomLinksSelection(UI.notificationbar, gamesSection)

    gamesJSON.forEach((game: Game) => {
        createGame(gamesSection, game.name, game.url)
    })
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
