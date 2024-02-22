import { Pen } from '../../penexutils'
import { HandlerDefinition } from '../../types'

function Block(content: Pen<HTMLElement>[]): Pen<HTMLElement>[] {
    let pen = Pen.fromHTML(`<div>
                           <h1>developers</h1>
                           <h2  class="divider" >Penguinify (maindev)</h2>
                           <h1>contributors</h1>
                           <h2>skrilll</h2>
                           <h2 class="divider" >disnos9</h2>

                           <h1>icons</h2>
                           <h3  class="divider" >font awesome</h3>
                           <h1>games</h2>
                           <h3  class="divider" >selenite <a href="https://discord.gg/7jyufnwJNf" target="_blank">(discord)</a></h3>
                           </div>`)
    pen[0].setParent(content[0].element)
    return pen || []
}

let definition: HandlerDefinition = {
    type: 'block',
    id: 'creditsblock',
    handler: Block,
}

export default definition
