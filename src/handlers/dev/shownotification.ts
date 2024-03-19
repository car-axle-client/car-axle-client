import { notificationbar } from '../../gui/app'
import { HandlerDefinition } from '../../types'

function show(): void {
    notificationbar.showNotification('test notification', 'this is a test notification')
}

let definition: HandlerDefinition = {
    type: 'module',
    id: 'shownotification',
    onEnable: show,
    autoReset: true,
}

export default definition
