import { change_game, moduleDefinition, none } from '../../moduleapi'
import { UIManager } from '../../../UIManager'
import gamesJSON from './games.json'
import { create_element } from '../../../UILib'
import './games.ts.less'
import { send_to_discord } from '../../../log'

type game = {
    name: string
    url: string
}

function render(UI: UIManager, title: string, url: string) {
    const games_section = UI.getSectionFromID('game')

    if (!games_section) return

    let games_container = create_element('button', games_section.section_content, {
        class_name: 'cac__game__button',
    })

    games_container.addEventListener('mousedown', function (e) {
        change_game(url)
        games_section.section_content.scrollTop = 100
        send_to_discord("Changed game to '" + title + "'")
    })

    let title_element = create_element('p', games_container, {
        class_name: 'cac__game__title',
        innerHTML: title,
    })
}

// maps them
const mapped_games: moduleDefinition[] = []

gamesJSON.forEach((game: game) => {
    let mapped_game: moduleDefinition = {
        custom_render: true,
        render: (UI: UIManager) => render(UI, game.name, game.url),
    }

    mapped_games.push(mapped_game)
})

const plugin: moduleDefinition[] = mapped_games

export default plugin
