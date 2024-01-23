import { Component, Pen } from '../../../penexutils'

export class Iframe extends Component {
    private src: string
    private parent: Pen

    constructor(parent: Pen, src: string = '') {
        super()

        this.src = src
        this.parent = parent
    }

    public penIt(): Pen[] {
        let pen = Pen.fromHTML(`<iframe src="${this.src}" class="cac-iframe rounded-md"></iframe>`)

        pen[0].setParent(this.parent.element)

        return pen
    }
}
