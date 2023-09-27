import { moduleDefinition } from '../../moduleapi'
import { VERSION } from '../../../static/constant'

const plugin: moduleDefinition = {
    displayName: `v${VERSION} i:0`,
    id: 'version',
    section: 'client',
    disabled: true
}

export default plugin
