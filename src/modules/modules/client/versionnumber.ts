import { moduleDefinition } from '../../moduleapi'
import { VERSION } from '../../../global/constant'

const plugin: moduleDefinition = {
    displayName: `v${VERSION} i:0`,
    id: 'version',
    section: 'client',
    disabled: true
}

export default plugin
