import { moduleDefinition, none } from "../../moduleapi"

const plugin: moduleDefinition = {
    displayName: "Backslash to hide and unhide",
    id: "hideinfo",
    section: "client",
    onactive: none,
    ondisable: none,
    reset: true
}

export default plugin;
