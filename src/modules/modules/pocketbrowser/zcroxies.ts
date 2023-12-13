import { checkStatus } from '../../../database'
import { DATABASE } from '../../../static/constant'
import { moduleDefinition } from '../../moduleapi'

type Special = {
    wild: string[]
    normal: string[]
    [key: string]: any
}

var special: Special = {
    wild: ['No link'],
    normal: ['No link'],
}

fetch(`${DATABASE}special.json`)
    .then((res) => res.json())
    .then((json) => (special = json))

function get_random_string(length: number) {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
}

function set_to_random_wildcard() {
    let iframe = document.getElementById('cac__pocketbrowser__iframe') as HTMLIFrameElement

    let link = special.wild[Math.floor(Math.random() * special.wild.length)]
    iframe.src = 'https://' + get_random_string(Math.floor(Math.random() * 10) + 3) + '.' + atob(link)
}

function set_to_random_normal() {
    let iframe = document.getElementById('cac__pocketbrowser__iframe') as HTMLIFrameElement

    let link = special.normal[Math.floor(Math.random() * special.normal.length)]
    iframe.src = atob(link)
}

// for some reason it only works with this fat version??? im not gunna question it
let statwus = checkStatus()
if (statwus) {
    var status_text = "Proxy Status: Online"
} else {
    var status_text = "Proxy Status: Offline (Try another website)"
}

const status: moduleDefinition = {
    custom_render: false,
    disabled: true,
    display_name: status_text,
    id: 'proxystatus',
    description: 'Checks if you can use Proxies',
    section: 'pocket',
}

const wildcard: moduleDefinition = {
    custom_render: false,
    display_name: 'Set to Random *.example.com Link',
    id: 'vu',
    description: 'Sets to a random proxy link (with a wildcard)',
    reset: true,
    section: 'pocket',
    onactive: () => set_to_random_wildcard(),
}

const normal: moduleDefinition = {
    custom_render: false,
    display_name: 'Set to Random example.com Link',
    id: 'uv',
    description: 'Sets to a random proxy link (without a wildcard)',
    reset: true,
    section: 'pocket',
    onactive: () => set_to_random_normal(),
}

const plugin: moduleDefinition[] = [status, wildcard, normal]

export default plugin
