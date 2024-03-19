import { GAMESLINK } from '../../constants'
import { Dropdown } from '../../gui/components/content/dropdown.component'
import { Elements, Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

function changeGameLink(input: string) {
    // hardcoded for now
    switch (input) {
        case 'default link':
            GAMESLINK.currentLink = GAMESLINK.defaultLink
            break
        default:
            // checks in deprecated links AND other links/alternate links
            for (let link of GAMESLINK.deprecated_links.concat(GAMESLINK.alternate_links)) {
                if (link.display === input) {
                    GAMESLINK.currentLink = link.url
                    console.log(atob(GAMESLINK.currentLink))
                    break
                }
            }

            break
    }
}

function Block(content: Pen<HTMLElement>[]): Pen<Elements>[] {
    let pens: Pen<HTMLElement>[] = Pen.fromHTML(`
        <div>
        <h1>game link selector</h1>
        <h2 class="divider">if the games aren't loading, try changing the link</h2>
        </div>`)

    pens.push(
        ...new Dropdown(
            pens[0],
            {
                type: 'dropdown',
                id: 'gameslinkdropdown',
                handler: changeGameLink,
            },
            {
                'Normal Links': ['default link (CURRENTLY DOESNT WORK, CHANGE THE LINK)'],
                'Other Links': GAMESLINK.alternate_links.map((link) => link.display),
                'Deprecated Links': GAMESLINK.deprecated_links.map((link) => link.display),
            }
        ).penIt()
    )

    pens[0].setParent(content[0].element)
    return pens || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'gameslinkblock',
    handler: Block,
}

export default definition
