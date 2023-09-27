import { moduleDefinition } from '../../moduleapi'

function editpagetext() {
    document.body.contentEditable = 'true'
    document.designMode = 'on'
}

function removeabilitytoeditpagetext() {
    document.body.contentEditable = 'false'
    document.designMode = 'off'
}

const plugin: moduleDefinition = {
    display_name: 'Edit Page Text',
    id: 'editpage',
    section: 'fun',
    onactive: editpagetext,
    ondisable: removeabilitytoeditpagetext,
    custom_render: false,
}

export default plugin
