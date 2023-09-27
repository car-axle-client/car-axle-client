import { moduleDefinition } from '../../moduleapi'
import { VERSION } from '../../../static/constant'

const plugin: moduleDefinition = {
    display_name: `v${VERSION} i:0`,
    id: 'version',
    section: 'client',
    disabled: true,
    custom_render: false,
}

export default plugin
