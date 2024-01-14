import { Component, Pen } from '../../penexutils'

export class MainContent extends Component {
    constructor() {
        super()
    }

    public penIt(): Pen[] {

        let pens =
            Pen.fromHTML(`
            <div class="maincontent layer2 rounded-md" id="maincontent">
            </div>
        `) || []

        return pens

    }
}
