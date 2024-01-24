import { Component, Pen } from '../../../penexutils'
import { HandlerDefinition } from '../../../types'

export class Module extends Component {
    private parent: Pen
    private handler: HandlerDefinition
    private active: boolean = false
    private title: string
    private description: string

    constructor(parent: Pen, title: string, description: string, handler: HandlerDefinition) {
        super()

        if (handler.type !== 'module') {
            throw new Error('Handler is not a module')
        }
        this.handler = handler
        this.parent = parent
        this.title = title
        this.description = description
    }

    public penIt(): Pen[] {
        let pens = Pen.fromHTML(`
                                <div class="cac-module rounded-md">
                                    <div>
                                        <h2>
                                            ${this.title}
                                        </h2>
                                        <p>
                                            ${this.description}
                                        </p>
                                    </div>
                                </div>`)

        // let content = this.handler.function(pens)

        // Array.isArray(content) && pens.push(...content)

        pens[0].setParent(this.parent.element)
        pens[0].element.addEventListener('mousedown', this.mouseDownHandler.bind(this))

        this.pens = pens
        return pens
    }

    public mouseDownHandler(e: MouseEvent): void {
        this.active = !this.active

        if (this.active) {
            // @ts-ignore -> type is module so it has a function with no args
            this.handler.onEnable()
            this.pens[0].element.classList.add('cac-module-active')
        } else {
            // @ts-ignore -> type is module so it has a function with no args
            this.handler.onDisable()
            this.pens[0].element.classList.remove('cac-module-active')
        }
    }
}
