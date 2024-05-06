import { Component } from '../../penexutils'

export class SidebarBackground implements Component {
    public section: string

    constructor(section: string = 'cac-games') {
        this.section = section

        setTimeout(() => {
            this.update()
        }, 1)

        window.addEventListener('resize', () => {
            this.update()
        })
    }

    public stringIt(): string {
        return `
            <div class="cac-sidebar-background" id="sidebar-background"></div>
        `
    }

    update(): void {
        let offset = document.getElementById(this.section)?.offsetTop
        document.getElementById('sidebar-background')?.animate(
            [
                {
                    top: `${offset}px`,
                },
            ],
            {
                duration: 500,
                fill: 'forwards',
                easing: 'ease',
            }
        )
    }
}
