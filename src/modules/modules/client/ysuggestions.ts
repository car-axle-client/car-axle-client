import { create_element } from '../../../UILib'
import { UIManager } from '../../../UIManager'
import { send_bug_report_to_discord } from '../../../log'
import { moduleDefinition } from '../../moduleapi'
import './suggestions.ts.less'

function render(UI: UIManager) {
    const section = UI.getSectionFromID('client')
    const section_content = section?.section_content
    if (!section_content) return
    if (!section) return

    const container = create_element('div', section_content, {
        class_name: 'cac__suggestions__container',
    })

    const title = create_element('h1', container, {
        innerHTML: 'Suggestions/Bug Reports',
        class_name: 'cac__suggestions__title',
    })

    const input_title = create_element('input', container, {
        value: 'Title',
        class_name: 'cac__suggestions__input',
    }) as HTMLInputElement

    const input_contact = create_element('input', container, {
        value: 'Your Discord/Email',
        class_name: 'cac__suggestions__input',
    }) as HTMLInputElement

    const input_content = create_element('textarea', container, {
        value: 'Body, describe your suggestion/bug report here',
        class_name: 'cac__suggestions__input',
    }) as HTMLTextAreaElement

    const submit = create_element('button', container, {
        innerHTML: 'Submit',
        class_name: 'cac__suggestions__submit',
    }) as HTMLButtonElement

    submit.addEventListener('click', () => {
        send_bug_report_to_discord(input_title.value, input_contact.value, input_content.value)
        submit.disabled = true
        submit.innerHTML = 'Submitted! Wait 60 seconds before submitting again.'
        setTimeout(() => {
            submit.disabled = false
            submit.innerHTML = 'Submit'
        }, 60000)
    })
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
