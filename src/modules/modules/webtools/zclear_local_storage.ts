import { moduleDefinition } from '../../moduleapi'

function clear_local_storage() {
    localStorage.clear()
}

const plugin: moduleDefinition = {
    id: 'clear_storage',
    custom_render: false,
    display_name: 'Clear All Local Storage Entries',
    description: 'All data saved by car axle client will be removed as well!',
    onactive: clear_local_storage,
    reset: true,
    section: 'js',
}

export default plugin
