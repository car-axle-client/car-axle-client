import { moduleDefinition } from '../../moduleapi'
import { checkStatus } from '../../../database'

let statwus = checkStatus()
// if (statwus) {
//     var status_text = 'Scripts Status: Online'
// } else {
//     var status_text = 'Scripts Status: Offline (Try another website)'
// }

const plugin: moduleDefinition = {
    custom_render: false,
    disabled: true,
    id: 'scriptstatus',
    display_name: 'this display is broken cause im to lazu to fix it! if you dont see anything, the script doesnt work!',
    description: 'Checks if you can use scripts on this website',
    section: 'cheats',
}

export default plugin
