import { Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'
import special from '../../assets/special.json'
import { Dropdown } from '../../gui/components/content/dropdown.component'
import { switchProxy } from './proxies'

// if your looking for links here, you must be desperate

function Block(content: Pen<HTMLElement>[]): Pen<HTMLElement>[] {
    let pens = Pen.fromHTML(`
        <div class="rounded-md bg-gray-800 p-4 m-4">
            <h1>Builtin Proxies</h1>
            <p class="divider">stored in the codebase, works on more websites</p>
        `)

    pens.push(
        ...new Dropdown(
            pens[0],
            {
                type: 'dropdown',
                id: 'specialproxies',
                handler: (value) => {
                    switchProxy(special.normal[parseInt(value)])
                },
            },
            { normal: special.normal.map((link, index) => index.toString()) }
        ).penIt()
    )

    pens[0].setParent(content[0].element)
    return pens || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'localproxyblock',
    handler: Block,
}

export default definition
