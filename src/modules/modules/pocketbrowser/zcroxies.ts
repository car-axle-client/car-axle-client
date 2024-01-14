import { create_element } from '../../../UILib'
import { UIManager } from '../../../UIManager'
import { checkStatus } from '../../../database'
import { DATABASE } from '../../../static/constant'
import { moduleDefinition } from '../../moduleapi'
import '../../module.less'

type Special = {
    wild: string[]
    normal: string[]
}

var special: Special = {
    wild: ['No link'],
    normal: ['No link'],
}

var id = 0

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

    id = Math.floor(Math.random() * special.normal.length)
    let link = special.normal[id]
    iframe.src = atob(link)

    set_id()
}

function set_id() {
    let id_input = document.getElementById('proccyid') as HTMLInputElement
    id_input.value = id.toString()
}

// makes an input that has an id. the id is a number. the number corresponds with the position of a proxy. this changes whenever a new normal proxy is set.
function create_id(UI: UIManager) {
    let section = UI.getSectionFromID('pocket')
    let section_content = section?.section_content
    if (!section_content) return

    let id_container = create_element('div', section_content, {
        class_name: 'cac__module__form',
    })

    let id_title = create_element('h2', id_container, {
        class_name: 'cac__module__form__title',
        innerHTML: 'Proxy ID',
    })

    let id_input = create_element('input', id_container, {
        class_name: 'cac__module__input',
        id: 'proccyid',
        type: 'text',
        value: '0',
    }) as HTMLInputElement

    id_input.addEventListener('change', () => {
        let iframe = document.getElementById('cac__pocketbrowser__iframe') as HTMLIFrameElement
        let link = special.normal[parseInt(id_input.value)]
        iframe.src = atob(link)
    })
}

// for some reason it only works with this fat version??? im not gunna question it
// IT STILL DOESN'T WORK WTFFFFF
var status_text = 'Proxy Status: Offline (Try another website)'
checkStatus().then((res) => {
    if (res) {
        status_text = 'Proxy Status: Online'
    }
})

const status: moduleDefinition = {
    custom_render: false,
    disabled: true,
    display_name: 'this display is broken cause im to lazy to fix it! if you dont see anything, the proxies doesnt work!',
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

const proxy_id: moduleDefinition = {
    custom_render: true,
    render: create_id,
}

const plugin: moduleDefinition[] = [status, wildcard, normal, proxy_id]

export default plugin
