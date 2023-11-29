import { create_element } from '../../../UILib'
import { UIManager } from '../../../UIManager'
import { moduleDefinition } from '../../moduleapi'

function is_link(str: string) {
    return str.includes('.')
}

function render(UI: UIManager) {
    const section = UI.getSectionFromID('pocket')
    const section_content = section?.section_content
    if (!section_content) return
    if (!section) return

    const title = create_element('h1', section_content, {
        innerHTML: 'Send me links to add to car axle client',
        class_name: 'cac__suggestions__title',
    })

    const input_content = create_element('textarea', section_content, {
        value: 'ill add them to the client...',
        class_name: 'cac__suggestions__input',
    }) as HTMLTextAreaElement

    input_content.placeholder = 'example.com'

    const submit = create_element('button', section_content, {
        innerHTML: 'Send',
        class_name: 'cac__suggestions__submit',
    }) as HTMLButtonElement

    submit.addEventListener('click', () => {
        if (!is_link(input_content.value)) {
            alert('please enter a link')
            return
        }

        submit.disabled = true
        submit.innerHTML = 'sent! (30s cooldown)'
        setTimeout(() => {
            submit.disabled = false
            submit.innerHTML = 'Send'
        }, 30000)
    })
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

// export default plugin
