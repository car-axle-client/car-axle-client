import { Component, Pen, getPenFromElementId } from '../../penexutils'
import { NAME } from '../../constants'
import json from '../../assets/sections.json'
import { SidebarButton } from './sidebarbutton.component'
import { SidebarBackground } from './sidebarbackground.component'

function setSection(section: string, sidebar_background: SidebarBackground) {
    sidebar_background.section = section
    sidebar_background.update()
}

export class Sidebar extends Component {
    constructor() {
        super()
    }

    public penIt(): Pen[] {
        let sidebar_background = new SidebarBackground()

        let pens =
            Pen.fromHTML(`
            <div class="sidebar layer2 rounded-md" id="section-navbar">
                <div class="header rounded-md">${NAME}</div>
            </div>
        `) || []

        let section_navbar = getPenFromElementId('section-navbar', pens)
        let section_background = Pen.fromHTML(sidebar_background.stringIt())

        section_background[0].setParent(section_navbar.element)

        json.forEach((section: any) => {
            let section_button = new SidebarButton(section.display_name, section.icon)

            let section_pen: Pen[] = section_button.penIt()
            section_pen[0].setParent(section_navbar.element)
            section_pen[0].addListener({
                name: 'click',
                callback: () => {
                    setSection(section.display_name, sidebar_background)
                },
            })
        })

        return pens
    }
}
