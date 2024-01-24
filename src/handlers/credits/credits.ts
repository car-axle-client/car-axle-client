import { Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

function Block(content: Pen[]): Pen[] {
    let pen = Pen.fromHTML(`<div>
                           <h1>developers</h1>
                           <h2  class="divider" >Penguinify (maindev)</h2>
                           <h1>contributors</h1>
                           <h2>skrilll</h2>
                           <h2 class="divider" >disnos9</h2>

                           <h1>credits</h1>
                           <h2>icons</h2>
                           <h3  class="divider" >font awesome</h3>
                           <h2>games</h2>
                           <h3  class="divider" >selenite <a href="https://github.com/selenite-cc/selenite">(github)</a></h3>
                           </div>`)
    pen[0].setParent(content[0].element)
    return pen || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'creditsblock',
    function: Block,
}

export default definition
