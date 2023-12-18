import { moduleDefinition } from '../../moduleapi'

function remove_all_cookies() {
    var cookies = document.cookie.split(';')
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i]
        var eqPos = cookie.indexOf('=')
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
    }
}

const plugin: moduleDefinition = {
    id: 'clear_cookies',
    custom_render: false,
    display_name: 'Clear All Cookies',
    description: 'Clears all cookies from this website',
    onactive: remove_all_cookies,
    reset: true,
    section: 'js',
}

export default plugin
