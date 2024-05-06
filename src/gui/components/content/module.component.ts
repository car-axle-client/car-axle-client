import { Component, Pen } from '../../../penexutils'
import { HandlerDefinition } from '../../../types'

export class Module implements Component {
    private parent: Pen<HTMLElement>
    private handler: HandlerDefinition
    private active: boolean = false
    private title: string
    private description: string

    pens: Pen<HTMLElement>[] = []

    constructor(parent: Pen<HTMLElement>, title: string, description: string, handler: HandlerDefinition) {
        if (handler.type !== 'module') {
            throw new Error('Handler is not a module')
        }
        this.handler = handler
        if (this.handler.autoReset === undefined) {
            this.handler.autoReset = false
        }
        this.parent = parent
        this.title = title
        this.description = description
    }

    public penIt(): Pen<HTMLElement>[] {
        let pens = Pen.fromHTML(`
                                <div class="cac-module">
                                    <div>
                                        <h2>
                                            ${this.title}
                                        </h2>
                                        <p>
                                            ${this.description}
                                        </p>
                                    </div>
                                </div>`)

        pens[0].setParent(this.parent.element)
        pens[0].element.addEventListener('mousedown', this.mouseDownHandler.bind(this))

        this.pens = pens
        return pens
    }

    public mouseDownHandler(): void {
        this.active = !this.active

        if (this.active) {
            // @ts-ignore -> type is module so it has a function with no args
            this.handler.onEnable()
            this.pens[0].element.classList.add('cac-module-active')

            // @ts-ignore -> type is module so it has autoreset definedddddd
            if (this.handler.autoReset) {
                this.active = false

                setTimeout(() => {
                    this.pens[0].element.classList.remove('cac-module-active')
                }, 500)
            }
        } else {
            // @ts-ignore -> type is module so it has a function with no args
            this.handler.onDisable()
            this.pens[0].element.classList.remove('cac-module-active')
        }
    }
}
