import { Component, Pen } from '../../penexutils'
import { Content } from '../../types'

export class MainContent extends Component {
    private title: string
    private description: string
    public maincontent!: Pen
    public content: Content[] = []

    constructor(title: string, description: string, content: Content[], enabled: boolean = false) {
        super()

        this.title = title
        this.description = description
        this.content = content

        if (enabled) {
            //@ts-ignore
            window.enabled = this
            document.addEventListener('DOMContentLoaded', () => {
                this.show()
            })
        }
    }

    public show(): void {
        this.maincontent.element.style.display = 'block'
    }

    public hide(): void {
        this.maincontent.element.animate(
            [
                {
                    opacity: 1,
                },
                {
                    opacity: 0,
                },
            ],
            {
                duration: 500,
            }
        )

        setTimeout(() => {
            this.maincontent.element.style.display = 'none'
        }, 500)
    }

    public penIt(): Pen[] {
        let pens =
            Pen.fromHTML(`
            <div class="maincontent layer2 rounded-md">
            <div class="maincontent-header">
                <h1 class="maincontent-header-text">${this.title}</h1>
                <p class="maincontent-description">${this.description}</p>
            </div>
            </div>
        `) || []

        this.maincontent = pens[0]

        this.content && pens.push(...this.addContent())

        return pens
    }

    private addContent(): Pen[] {

        let pens: Pen[] = []
        
        this.content.forEach((content) => {

            switch (content.type) {
                case 'iframe':
                    let iframe = Pen.fromHTML(`
                        <iframe class="cac-iframe rounded-md" src="${content.src}" frameborder="0" allowfullscreen></iframe>
                    `)[0]

                    iframe.setParent(this.maincontent.element)

                    if (content.controls) {
                        iframe.element.setAttribute('controls', 'true')
                    }
                    
                    pens.push(iframe)
            }
        })

        return pens
    }

}
