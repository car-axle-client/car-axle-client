import { create_element } from '../../../UILib'
import { UIManager } from '../../../UIManager'
import { moduleDefinition, new_iframe } from '../../moduleapi'
import './youtubebrowser.ts.less'

function render(UI: UIManager) {
    let section = UI.getSectionFromID('youtube')

    if (!section) return

    const iframe_input = create_element('input', section.section_content, {
        class_name: 'cac__pocketbrowser__input',
        type: 'text',
        value: 'what it says down there',
    }) as HTMLInputElement

    const iframe = new_iframe(
        UI,
        section.section_content,
        'https://placehold.co/600x400?text=^+paste+video+id+^'
    )

    iframe_input.addEventListener('change', (e) => {
        if (iframe_input.value.includes('youtube.com')) {
            iframe_input.value = iframe_input.value.split('v=')[1]
        }

        iframe.setAttribute(
            'src',
            `https://youtube.com/embed/${iframe_input.value}`
        )
    })
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
