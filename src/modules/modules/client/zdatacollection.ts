import { moduleDefinition } from '../../moduleapi'

const plugin: moduleDefinition = {
    display_name: 'I collect usage data such as which modules you have enabled',
    description: 'This data is collected for for the purpose of improving the client. The data cannot be traced back to you.',
    id: 'datainfo',
    section: 'client',
    disabled: true,
    custom_render: false,
}

export default plugin
