import { moduleDefinition, none } from '../../moduleapi'
import { VERSION } from '../../../global/constant'

const plugin: moduleDefinition = {
    displayName: `v${VERSION} i:0`,
    id: 'version',
    section: 'client',
    onactive: none,
    ondisable: none,
    reset: true,
}

export default plugin
