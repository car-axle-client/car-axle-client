import { UIManager } from '../../../UIManager'
import { moduleDefinition } from '../../moduleapi'
import '../../../components/button.ts.less'
import { create_element } from '../../../UILib'

function handleSearch(games: HTMLCollectionOf<Element>, input: HTMLInputElement) {
    let search = input.value.toLowerCase()

    // hides the games if they don't match the search
    if (search == '') {
        for (let game of games) {
            game.classList.remove('cac__game__button--hidden')
        }
        return
    }

    for (let game of games) {
        let game_name = game.getElementsByClassName('cac__game__title')[0].innerHTML.toLowerCase()
        if (game_name.includes(search)) {
            game.classList.remove('cac__game__button--hidden')
        } else {
            game.classList.add('cac__game__button--hidden')
        }
    }
}

function render(UI: UIManager) {
    let section_content = UI.getSectionFromID('game')?.section_content
    if (!section_content) return


    let input: HTMLInputElement = create_element('input', section_content, {
        value: 'Search for a game',
        class_name: 'cac__button__input',
    }) as HTMLInputElement
    input.style.marginTop = '2%'
    let games = section_content.getElementsByClassName('cac__game__button')

    // sets the input to put under the iframe controls.
    section_content.insertBefore(input, games[0])

    input.addEventListener('keyup', () => {
        handleSearch(games, input)
    })
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
