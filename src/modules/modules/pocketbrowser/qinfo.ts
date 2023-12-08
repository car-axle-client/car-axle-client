import { moduleDefinition } from '../../moduleapi'

const plugins: moduleDefinition[] = [
    {
        custom_render: false,
        disabled: true,
        id: 'infoyt',
        display_name: 'How to use youtube',
        description: 'Paste in any youtube link into pocket browser and it will work. (Unless your school blocks youtube)',
        section: 'pocket',
    },
    {
        custom_render: false,
        disabled: true,
        id: 'infocookies',
        display_name: 'Fix some websites and games',
        description: 'Go to <a href="https://github.com/car-axle-client/car-axle-client/blob/main/docs/disablingcookies.md" target="_blank">this link</a> and follow the instructions',
        section: 'pocket',
    },
]

export default plugins
