import { moduleDefinition } from '../../moduleapi'
import { DATABASE } from '../../../static/constant'
import { checkStatus } from '../../../database'

let status: boolean = checkStatus()

const plugin: moduleDefinition = {
    custom_render: false,
    disabled: true,
    id: 'scriptstatus',
    display_name: status ? 'Script Status: Offline (Try another website)' : 'Script Status: Online',
    description: 'Checks if you can use Scripts on this website',
    section: 'cheats',
}

export default plugin
