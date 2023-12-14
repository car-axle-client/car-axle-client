import { moduleDefinition } from '../../moduleapi'
import { UIManager } from '../../../UIManager'
import gamesJSON from './games.json'
import { create_element } from '../../../UILib'
import './games.ts.less'
import '../../../components/button.ts.less'
import { send_to_discord } from '../../../log'
import { GAMESLINK } from '../../../static/constant'

type game = {
    name: string
    url: string
}

var gamelink: string = GAMESLINK.defaultLink

function change_game(url: string) {
    let iframe = document.getElementById('cac__games__iframe') as HTMLIFrameElement
    iframe.setAttribute('src', atob(gamelink) + url)
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

function create_custom_links_selection(games_section: HTMLElement) {
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
        gamelink = GAMESLINK.defaultLink
        // TODO: make this like good
        alert('Changed game link to the default link')
        send_to_discord('Changed game link to default')
    })

    alternate_selection.addEventListener('mousedown', function (e) {
        gamelink = GAMESLINK.alternateLink
        // TODO: make this like good
        alert('Changed game link to the alternate link')
        send_to_discord('Changed game link to alternate')
    })

    custom_selection.addEventListener('keydown', function (e) {
        if (e.key == 'Enter') {
            if (!custom_selection.value.endsWith('/')) {
                custom_selection.value += '/'
            }
            gamelink = btoa(custom_selection.value)
            // shhhh, they don't know about this
            // TODO: make this like good
            alert('Changed game link to ' + custom_selection.value)
            send_to_discord(`Changed game link to ${custom_selection.value}`)
        }
    })
}

function render(UI: UIManager) {
    const games_section = UI.getSectionFromID('game')?.section_content

    if (!games_section) return

    create_custom_links_selection(games_section)

    gamesJSON.forEach((game: game) => {
        create_game(games_section, game.name, game.url)
    })
}
const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
