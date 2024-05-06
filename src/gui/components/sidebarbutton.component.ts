import { Pen, Component } from '../../penexutils'

export class SidebarButton implements Component {
    private title: string
    private icon: string

    constructor(title: string, icon: string) {
        this.title = title
        this.icon = icon
    }
    public penIt(): Pen<HTMLElement>[] {
        // you can deal with it later.

        let top: string = ''
        if (this.title == 'client / tab cloak') {
            top = 'position: absolute; bottom: 9%;'
        } else if (this.title == 'credits') {
            top = 'position: absolute; bottom: 2%;'
        }

        return Pen.fromHTML(`
            <div class="cac-sidebar-button" style="${top}" id="cac-${this.title}">${this.icon}<p>${this.title}</p></div>
        `)
    }
}
