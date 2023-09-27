import { moduleDefinition, changeGame, none } from '../../moduleapi'
import gamesJSON from './games.json'

type game = {
    name: string
    url: string
}

// maps them
const mapped_games: moduleDefinition[] = []

gamesJSON.forEach((game: game) => {
    let mapped_game: moduleDefinition = {
        display_name: game['name'],
        id: game['name'],
        onactive: () => changeGame(game['url']),
        ondisable: none,
        section: 'game',
        reset: true,
        custom_render: false,
    }

    mapped_games.push(mapped_game)
})

const plugin: moduleDefinition[] = mapped_games

export default plugin
