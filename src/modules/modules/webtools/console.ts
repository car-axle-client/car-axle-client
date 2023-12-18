import { create_element } from '../../../UILib'
import { UIManager } from '../../../UIManager'
import { moduleDefinition } from '../../moduleapi'
import './console.ts.less'

function render(UI: UIManager) {
    let section = UI.getSectionFromID('js')
    let section_content = section?.section_content
    console.log(section_content)
    if (!section_content) return
    let console_container = create_element('div', section_content, {
        class_name: 'cac__console__container',
    })
    let output = create_element('div', console_container, {
        class_name: 'cac__console__output',
    })
    let console_input = create_element('input', console_container, {
        class_name: 'cac__console__input',
    }) as HTMLInputElement

    console_input.placeholder = '> evaluate expression'

    //@ts-ignore
    console.stdlog = console.log.bind(console)
    //@ts-ignore
    console.log = function () {
        //@ts-ignore
        console.stdlog.apply(console, arguments)

        create_element('div', output, {
            class_name: 'cac__console__log',
            innerHTML: `(${new Date().toLocaleTimeString()}) ${Array.from(arguments).join(' ') || 'undefined'}`,
        })
    }

    console_input.addEventListener('keypress', (e) => {
        if (e.key != 'Enter') return
        let input = console_input.value
        console_input.value = ''
        try {
            let output = eval(input)
            if (output) console.log(output)
        } catch (err) {
            create_element('div', output, {
                class_name: 'cac__console__error',
                innerHTML: `(${new Date().toLocaleTimeString()}) ${err}`,
            })
        }
    })
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
