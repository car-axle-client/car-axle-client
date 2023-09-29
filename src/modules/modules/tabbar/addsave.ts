import { UIManager } from '../../../UIManager'
import { moduleDefinition } from '../../moduleapi'
import { render_icon } from './iconlib'

function add_save(UI: UIManager) {
    console.log('%cAttempting Save', 'color:blue; font-size: 3vw;')

    // too lazy to rigidly define values
    let cacStorage: Array<any> = []

    for (let section of UI.sections) {
        let buttonValues = section.get_all_button_values()
        console.log('%c' + section.id, 'font-size:1.25vw;')
        console.table(buttonValues)
        cacStorage.push({ sectionID: section.id, buttonValues })
    }

    localStorage.setItem('car-axle-client', JSON.stringify(cacStorage))
}

function render(UI: UIManager) {
    render_icon(
        UI,
        'Add Save',
        () => add_save(UI),
        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/></svg>'
    )
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
