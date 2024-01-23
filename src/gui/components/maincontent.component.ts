import { Component, Pen } from '../../penexutils'
import { Content, HandlerDefinition, HandlerOutput } from '../../types'
import { Block } from './content/block.component'
import { Iframe } from './content/iframe.component'

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

        this.maincontent.element.animate(
            [
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                },
            ],
            {
                duration: 500,
            }
        )
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

        let handlers: { [key: string]: HandlerDefinition } = {}
        let context = require.context('../../handlers/', true, /\.ts$/)
        context.keys().forEach((key) => {
            let handler = context(key).default
            handlers[handler.name] = handler
        })

        this.content.forEach((content) => {
            switch (content.type) {
                case 'iframe':
                    pens.push(new Iframe(this.maincontent, content.src).penIt()[0])
                    break
                case 'block':
                    pens.push(new Block(this.maincontent, handlers[content.handler]).penIt()[0])
                    break
            }
        })

        return pens
    }
}
