import { Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'
import { Input } from '../../gui/components/content/input.component'
import { Dropdown } from '../../gui/components/content/dropdown.component'
import tabCloaks from '../../assets/tabcloaks.json'

async function changePageTitle(title: string): Promise<void> {
    document.title = title
}

async function changePageFavicon(url: string): Promise<void> {
    // remove old favicon
    let oldFavicon = document.querySelector('link[rel="icon"]')
    oldFavicon && document.head.removeChild(oldFavicon)

    let favicon = document.createElement('link')
    favicon.setAttribute('rel', 'icon')
    favicon.setAttribute('href', url)
    document.head.appendChild(favicon)
}

function handlePageTitleInput(input: string): void {
    changePageTitle(input)
}

function handlePageFaviconInput(input: string): void {
    changePageFavicon(input)
}

function handlePresetChange(input: string): void {
    let tabcloak: string[] = tabCloaks[input as keyof typeof tabCloaks]
    if (tabcloak) {
        changePageTitle(tabcloak[0])
        changePageFavicon(tabcloak[1])
    }
}

function createPresets(parent: Pen): Pen[] {
    let pens = Pen.fromHTML(`<h2>Presets</h2>`)
    pens[0].setParent(parent.element)

    let presets = Object.keys(tabCloaks).map((key) => {
        return key
    })

    pens.push(...new Dropdown(parent, { type: 'dropdown', id: 'tabcloakpresets', handler: handlePresetChange }, presets).penIt())
    return pens
}

function Block(content: Pen[]): Pen[] {
    let pens = Pen.fromHTML(`<div>
                           <h1 class="divider">Tabcloak</h1>
                           <h2>Page Title and Page Icon</h2>
                           </div>`)
    pens[0].setParent(content[0].element)

    let pageTitleInput = new Input(
        pens[0],
        {
            type: 'input',
            id: 'tabcloakpagetitleinput',
            handler: handlePageTitleInput,
        },
        document.title
    )

    let pageFaviconInput = new Input(
        pens[0],
        {
            type: 'input',
            id: 'tabcloakpagefavicominput',
            handler: handlePageFaviconInput,
        },
        document.querySelector('link[rel="icon"]')?.getAttribute('href') || 'https://google.com/favicon.ico'
    )

    pens.push(...pageTitleInput.penIt())
    pens.push(...pageFaviconInput.penIt())
    pens.push(...createPresets(pens[0]))
    return pens || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'tabcloakblock',
    function: Block,
}

export default definition
