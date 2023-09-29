import { UIManager } from "../../../UIManager"
import { moduleDefinition } from "../../moduleapi"
import { create_element } from "../../../UILib"

function render(UI: UIManager) {
    let games = UI.getSectionFromID("game")
    if (!games) return

    // this section is special
    let gamesIframe = create_element('iframe', games.section_content, {
        id: 'cac__games__iframe',
    })
    // please no leak love you <3
    gamesIframe.setAttribute(
        'src',
        'https://penguinify-web-dev.github.io/yourgay'
    )

    document.addEventListener("keydown", (e) => {
        // shift + f
        if (e.key == 'F' && e.shiftKey) {
            // toggles fullscreen for the iframe
            gamesIframe.requestFullscreen()
        }
    })
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render
}

export default plugin;
