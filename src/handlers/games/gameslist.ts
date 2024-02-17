import { GAMESLINK } from '../../constants'
import { Button } from '../../gui/components/content/button.component'
import { Input } from '../../gui/components/content/input.component'
import { Pen } from '../../penexutils'
import { Game, HandlerDefinition } from '../../types'

function changeGame(url: string) {
    ;(document.getElementById('gamesiframe') as HTMLIFrameElement).src = atob(GAMESLINK.currentLink) + url
}

function searchGame(input: string, gamesJSON: Game[]) {
    let gamesElements: NodeListOf<HTMLElement> = document.querySelectorAll('#cac-gameslistblock div')
    input = input.toLowerCase()
    for (let [index, game] of gamesJSON.entries()) {
        gamesElements[index].style.display = game.name.toLowerCase().includes(input) ? 'block' : 'none'
    }
}

function Block(content: Pen[]): Pen[] {
    let pens: Pen[] = Pen.fromHTML(`
        <div style="
        height: 50vh;
        overflow-y: scroll;
        " id="cac-gameslistblock"">
        <h1>game selector</h1>
        </div>`)

    let gamesJSON: Game[] = require('../../assets/games.json')

    // this is the search box btw
    pens.push(
        ...new Input(
            pens[0],
            {
                type: 'input',
                id: 'searchgame',
                handler: (input: string) => searchGame(input, gamesJSON),
            },
            'search for a game'
        ).penIt()
    )

    for (let game of gamesJSON) {
        pens.push(
            ...new Button(pens[0], game.name, {
                type: 'button',
                id: game.name,
                handler: () => changeGame(game.url),
            }).penIt()
        )
    }

    pens[0].setParent(content[0].element)
    return pens || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'gameslistblock',
    handler: Block,
}

export default definition
