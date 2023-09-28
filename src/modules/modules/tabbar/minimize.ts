import { UIManager } from '../../../UIManager'
import { moduleDefinition } from '../../moduleapi'
import { render_icon } from './iconlib'

function minimize() {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: '\\' }))
}

function render(UI: UIManager) {
    render_icon(
        UI,
        'Minimize',
        minimize,
        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>'
    )
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
