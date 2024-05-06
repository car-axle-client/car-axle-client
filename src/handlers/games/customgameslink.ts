import { GAMESLINK } from '../../constants'
import { notificationbar } from '../../gui/app'
import { Dropdown } from '../../gui/components/content/dropdown.component'
import { Input } from '../../gui/components/content/input.component'
import { Elements, Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

function changeGameLink(input: string) {
    input = input.trim().toLowerCase()
    if (!input.includes('//')) {
        input = 'https://' + input
    }

    if (input.charAt(input.length - 1) !== '/') {
        input += '/semag/'
    } else {
        input += 'semag/'
    }

    // check if the link is a selenite link
    try {
        fetch(input + 'pool/index.html').then((response) => {
            if (response.status === 404) {
                notificationbar.showNotification('Invalid link', 'The link you entered is invalid, please enter a valid selenite link')
            } else if (response.status === 200) {
                GAMESLINK.currentLink = btoa(input)
            } else {
                notificationbar.showNotification('Unknown error', 'An unknown error occured, please try again')
            }
        })
    } catch (e) {
        notificationbar.showNotification('Unknown error', 'An unknown error occured, please try again')
    }
}

function Block(content: Pen<HTMLElement>[]): Pen<Elements>[] {
    let pens: Pen<HTMLElement>[] = Pen.fromHTML(`
        <div>
        <h1>custom games link (selenite links only atm)</h1>
        <h2 class="divider">join their discord server for more links: <a href="https://discord.gg/selenite-1148719137238040606">discord</a></h2>
        </div>`)

    pens.push(
        ...new Input(
            pens[0],
            {
                type: 'input',
                id: 'customgameslinkinput',
                handler: changeGameLink,
            },
            'https://selenite.cc/'
        ).penIt()
    )

    pens[0].setParent(content[0].element)
    return pens || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'customgameslinkblock',
    handler: Block,
}

export default definition
