import { moduleDefinition, none } from '../../moduleapi'

const plugin: moduleDefinition = {
    displayName: 'v3 i:0',
    id: 'version',
    section: 'client',
    onactive: none,
    ondisable: none,
    reset: true,
}

export default plugin
