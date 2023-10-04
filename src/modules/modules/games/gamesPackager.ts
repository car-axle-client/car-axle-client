import { moduleDefinition, change_game, none } from '../../moduleapi'
import { UIManager } from '../../../UIManager'
import gamesJSON from './games.json'
import { create_element } from '../../../UILib'
import "./games.ts.less"

type game = {
    name: string
    url: string
    imgurl?: string
}

function render(UI: UIManager, title: string, url: string, imgurl: string) {
    const games_section = UI.getSectionFromID("game")
    
    if (!games_section) return

    let games_container = create_element(
        "button",
        games_section.section_content,
        {
            "class_name": "cac__game__button"
        }
    )

    games_container.addEventListener("mousedown", function(e) {
        change_game(url)
    })

    let image_element = create_element(
        "img",
        games_container,
        {
            "class_name": "cac__game__image",
        }
    )

    image_element.setAttribute(
        "src",
        imgurl
    )

    let title_element = create_element(
        "p",
        games_container,
        {
            "class_name": "cac__game__title",
            "innerHTML": title
        }
    )


}

// maps them
const mapped_games: moduleDefinition[] = []

gamesJSON.forEach((game: game) => {
    let mapped_game: moduleDefinition = {
        custom_render: true,
        render: (UI: UIManager) => render(UI, game.name, game.url, game.imgurl || "https://placehold.co/600x400?text=game+image+ig")
    }

    mapped_games.push(mapped_game)
})

const plugin: moduleDefinition[] = mapped_games

export default plugin
