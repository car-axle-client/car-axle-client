import { create_element } from '../../../UILib'
import { UIManager } from '../../../UIManager'
import '../../module.less'
import { moduleDefinition } from '../../moduleapi'
import { getHashFromLocalStorage, saveHashToLocalStorage } from '../../../storage_manager'

interface CloakJSON {
    [key: string]: string[]
}

const cloaksJSON: CloakJSON = require('./cloaks.json')

// creates default favicon

if (!document.querySelector("link[rel*='icon']")) {
    const link = create_element('link', document.head) as HTMLLinkElement
    link.rel = 'icon'
}

function update_cloak(title?: string, img_url?: string) {
    if (title) {
        document.title = title
        saveHashToLocalStorage('tabcloak__title', title)
    }

    if (img_url) {
        const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement
        link.href = img_url
        saveHashToLocalStorage('tabcloak__img_url', img_url)
    }
}

function get_cloak_from_storage(): string[] {
    return [getHashFromLocalStorage('tabcloak__title'), getHashFromLocalStorage('tabcloak__img_url')]
}

function set_cloak_from_storage(title_input: HTMLInputElement, img_url: HTMLInputElement) {
    let cloak = get_cloak_from_storage()

    title_input.value = cloak[0]
    img_url.value = cloak[1]

    update_cloak(cloak[0], cloak[1])
}

function generate_options(): string {
    let options = ''
    let key = ''
    let value: string[] = []
    for ([key, value] of Object.entries(cloaksJSON)) {
        options += `<option value="${key}">${value[1]}</option>`
    }
    return options
}

function render(UI: UIManager) {
    const section = UI.getSectionFromID('client')
    const section_content = section?.section_content
    if (!section_content) return

    const container = create_element('div', section_content, {
        class_name: 'cac__module__form',
    })

    const title = create_element('h1', container, {
        innerHTML: 'Tab Cloak',
        class_name: 'cac__module__form__title',
    })

    const presets = create_element('select', container, {
        class_name: 'cac__module__input',
        innerHTML: generate_options(),
    }) as HTMLSelectElement

    const input_title = create_element('input', container, {
        value: 'Tab Cloak Title',
        class_name: 'cac__module__input',
    }) as HTMLInputElement

    const input_img_url = create_element('input', container, {
        value: 'Image URL',
        class_name: 'cac__module__input',
    }) as HTMLInputElement

    presets.addEventListener('change', () => {
        const cloak: string[] = cloaksJSON[presets.value]
        input_title.value = cloak[0]
        input_img_url.value = cloak[2]

        update_cloak(input_title.value, input_img_url.value)
    })

    input_title.addEventListener('keyup', () => {
        update_cloak(input_title.value)
    })

    input_img_url.addEventListener('change', () => {
        update_cloak(input_img_url.value)
    })

    set_cloak_from_storage(input_title, input_img_url)
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
