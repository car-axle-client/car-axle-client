import { create_element } from '../../../UILib'
import { UIManager } from '../../../UIManager'
import { CLIENTNAME, HOST, ITERATION, VERSION } from '../../../static/constant'
import { moduleDefinition } from '../../moduleapi'
import './console.ts.less'
import easterEggs from './eastereggs.json'

var history: string[] = []
let history_index = 0

function render(UI: UIManager) {
    let section = UI.getSectionFromID('js')
    let section_content = section?.section_content
    if (!section_content) return

    let console_container = create_element('div', section_content, {
        class_name: 'cac__console__container',
    })
    let console_menu_bar = create_element('div', console_container, {
        class_name: 'cac__console__menubar',
    })
    let console_menu_bar_title = create_element('div', console_menu_bar, {
        class_name: 'cac__console__menubar__item',
        innerHTML: `${CLIENTNAME} ${VERSION}.${ITERATION} ${HOST}`,
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

    function handle_input_enter() {
        if (!console_input.value) return
        let input = console_input.value

        // checks for easter eggs
        for (let easterEgg of easterEggs) {
            if (input.includes(easterEgg.keyword)) {
                create_element('div', output, {
                    class_name: 'cac__console__log',
                    innerHTML: `${easterEgg.response}`,
                })
            }
        }

        try {
            let output = eval(input)
            if (output) console.log(output)
        } catch (err) {
            create_element('div', output, {
                class_name: 'cac__console__error',
                innerHTML: `(${new Date().toLocaleTimeString()}) ${err}`,
            })
        }

        history.push(console_input.value)
        history_index = history.length
        console_input.value = ''
    }

    function handle_input_up() {
        if (history_index === 0) return
        history_index--
        console_input.value = history[history_index]
    }

    function handle_input_down() {
        if (history_index === history.length) return
        history_index++
        console_input.value = history[history_index] || ''
    }

    console_input.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'Enter':
                handle_input_enter()
                break
            case 'ArrowUp':
                handle_input_up()
                break
            case 'ArrowDown':
                handle_input_down()
                break
        }
    })
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
