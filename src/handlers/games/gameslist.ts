import { GAMESLINK } from '../../constants'
import { Button } from '../../gui/components/content/button.component'
import { Pen } from '../../penexutils'
import { Game, HandlerDefinition } from '../../types'

function changeGame(url: string) {
    ;(document.getElementById('gamesiframe') as HTMLIFrameElement).src = atob(GAMESLINK.currentLink) + url
}

function Block(content: Pen[]): Pen[] {
    let pens: Pen[] = Pen.fromHTML(`
        <div style="
        height: 40%;
        overflow-y: scroll;
        ">
        <h1>game selector</h1>
        </div>`)

    let gamesJSON: Game[] = require('../../assets/games.json')

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
