import { change_game, moduleDefinition } from '../../moduleapi'
import { UIManager } from '../../../UIManager'
import gamesJSON from './games.json'
import { create_element } from '../../../UILib'
import './games.ts.less'
import { send_to_discord } from '../../../log'

type game = {
    name: string
    url: string
}

function create_game(games_section: HTMLElement, name: string, url: string) {
    let container = create_element('button', games_section, {
        class_name: 'cac__game__button',
    })

    container.addEventListener('mousedown', function (e) {
        change_game(url)
        send_to_discord("Changed game to '" + name + "'")
    })

    let title = create_element('p', container, {
        class_name: 'cac__game__title',
        innerHTML: name,
    })
}

function render(UI: UIManager) {
    const games_section = UI.getSectionFromID('game')?.section_content

    if (!games_section) return

    gamesJSON.forEach((game: game) => {
        create_game(games_section, game.name, game.url)
    })
}
const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
