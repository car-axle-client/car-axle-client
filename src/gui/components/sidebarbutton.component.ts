import { Pen, Component } from '../../penexutils'

export class SidebarButton extends Component {
    private title: string
    private icon: string

    constructor(title: string, icon: string) {
        super()

        this.title = title
        this.icon = icon
    }
    public penIt(): Pen[] {
        // you can deal with it later.

        let top: string = ''
        if (this.title == 'client / tab cloak') {
            top = 'position: absolute; bottom: 2%;'
        } else if (this.title == 'credits') {
            top = 'position: absolute; bottom: 9%;'
        }

        return Pen.fromHTML(`
            <div class="sidebar-button" style="${top}" id="${this.title}">${this.icon}<p>${this.title}</p></div>
        `)
    }
}
