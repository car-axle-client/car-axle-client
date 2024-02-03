import { GAMESLINK } from '../../constants'
import { Dropdown } from '../../gui/components/content/dropdown.component'
import { Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

function changeGameLink(input: string) {
    // hardcoded for now
    switch (input) {
        case 'default link':
            GAMESLINK.currentLink = GAMESLINK.defaultLink
            break
        default:
            let link = GAMESLINK.alternate_links.find((link) => link.display === input)
            if (link) {
                GAMESLINK.currentLink = link.url
            }
            break
    }
}

function Block(content: Pen[]): Pen[] {
    let pens: Pen[] = Pen.fromHTML(`
        <div>
        <h1>game link selector</h1>
        </div>`)

    pens.push(...new Dropdown(
        pens[0],
        {
            type: 'dropdown',
            id: 'gameslinkdropdown',
            handler: changeGameLink
        },
        [
            "default link", 
            ...GAMESLINK.alternate_links.map(
                (link) => {
                    return link.display
                }
            )
        ]
    ).penIt())


    pens[0].setParent(content[0].element)
    return pens || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'gameslinkblock',
    handler: Block,
}

export default definition
