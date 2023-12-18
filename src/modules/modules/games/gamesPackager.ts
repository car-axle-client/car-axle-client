import { moduleDefinition } from '../../moduleapi'
import { UIManager } from '../../../UIManager'
import gamesJSON from './games.json'
import { create_element } from '../../../UILib'
import './games.ts.less'
import '../../../components/button.ts.less'
import { send_to_discord } from '../../../log'
import { GAMESLINK } from '../../../static/constant'
import { saveHashToLocalStorage } from '../../../storage_manager'
import NotificationBar from '../../../components/notificationbar'

type game = {
    name: string
    url: string
}

var gamelink: string = GAMESLINK.defaultLink

function change_game(url: string) {
    let iframe = document.getElementById('cac__games__iframe') as HTMLIFrameElement
    iframe.setAttribute('src', atob(gamelink) + url)
}

function save_current_link() {
    saveHashToLocalStorage('gamelink', gamelink)
}

function change_game_link(url: string, notificationbar: NotificationBar) {
    gamelink = url
    save_current_link()
    send_to_discord(`Changed game link to ${url}`)
    notificationbar.new_notification('Changed game link', `Try clicking an a game.`)
}

function create_game(games_section: HTMLElement, name: string, url: string) {
    let container = create_element('button', games_section, {
        class_name: 'cac__game__button',
    })

    container.addEventListener('mousedown', function (e) {
        change_game(url)
        games_section.scrollTop = 100
        send_to_discord("Changed game to '" + name + "'")
    })

    let title = create_element('p', container, {
        class_name: 'cac__game__title',
        innerHTML: name,
    })
}

function create_custom_links_selection(notificationbar: NotificationBar, games_section: HTMLElement) {
    let container = create_element('div', games_section, {
        class_name: 'cac__form__container',
    })

    let title = create_element('h1', container, {
        class_name: 'cac__button__form__title',
        innerHTML: 'Switch game links',
    })

    let default_selection = create_element('button', container, {
        class_name: 'cac__button',
        innerHTML: 'Default link ************.fun',
    })

    let alternate_selection = create_element('button', container, {
        class_name: 'cac__button',
        innerHTML: 'Alternate link ************.amplifyapp.com',
    })

    let custom_selection = create_element('input', container, {
        class_name: 'cac__button__input',
        value: 'Set to custom link',
    }) as HTMLInputElement

    default_selection.addEventListener('mousedown', function (e) {
        change_game_link(GAMESLINK.defaultLink, notificationbar)
    })

    alternate_selection.addEventListener('mousedown', function (e) {
        change_game_link(GAMESLINK.alternateLink, notificationbar)
    })

    custom_selection.addEventListener('keydown', function (e) {
        if (e.key == 'Enter') {
            if (!custom_selection.value.endsWith('/')) {
                custom_selection.value += '/'
            }
            change_game_link(btoa(custom_selection.value), notificationbar)
        }
    })
}

function render(UI: UIManager) {
    const games_section = UI.getSectionFromID('game')?.section_content

    if (!games_section) return

    create_custom_links_selection(UI.notificationbar, games_section)

    gamesJSON.forEach((game: game) => {
        create_game(games_section, game.name, game.url)
    })
}
const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
