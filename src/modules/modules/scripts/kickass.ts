import { moduleDefinition } from '../../moduleapi'

function kickballs() {
    var KICKASSVERSION = '2.0'
    var s = document.createElement('script')
    s.type = 'text/javascript'
    document.body.appendChild(s)
    s.src = 'https://hi.kickassapp.com/kickass.js'
    void 0
}

const plugin: moduleDefinition = {
    custom_render: false,
    display_name: 'Kick ### Bookmarklet',
    id: 'kick',
    description: 'Small game that destroys your website!',
    section: 'cheats',
    reset: true,
    onactive: kickballs,
}

export default plugin
