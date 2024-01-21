import { Component, Pen, getPenFromElementId } from '../../penexutils'
import { NAME } from '../../constants'
import json from '../../assets/sections.json'
import { SidebarButton } from './sidebarbutton.component'
import { SidebarBackground } from './sidebarbackground.component'
import { MainContent } from './maincontent.component'

function setSection(section: string, sidebar_background: SidebarBackground) {
    sidebar_background.section = section
    sidebar_background.update()
}

export class Sidebar extends Component {
    private buttons: Pen[] = []
    private sidebar_background!: SidebarBackground

    constructor() {
        super()
    }

    public bindContent(content: MainContent[]) {
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].addListener({
                name: 'click',
                callback: () => {
                    if (this.sidebar_background.section == this.buttons[i].element.id) {
                        return
                    }
                    // @ts-ignore
                    window.enabled.hide()
                    // @ts-ignore
                    window.enabled = content[i]
                    content[i].show()

                    setSection(this.buttons[i].element.id, this.sidebar_background)
                },
            })
        }
    }

    public penIt(): Pen[] {
        this.sidebar_background = new SidebarBackground()

        let pens =
            Pen.fromHTML(`
            <div class="sidebar layer2 rounded-md" id="section-navbar">
                <div class="header rounded-md">${NAME}</div>
            </div>
        `) || []

        let section_navbar = getPenFromElementId('section-navbar', pens)
        let section_background = Pen.fromHTML(this.sidebar_background.stringIt())

        section_background[0].setParent(section_navbar.element)

        json.forEach((section: any) => {
            let section_button = new SidebarButton(section.display_name, section.icon)

            let section_pen: Pen[] = section_button.penIt()
            section_pen[0].setParent(section_navbar.element)

            this.buttons.push(section_pen[0])
        })

        return pens
    }
}
