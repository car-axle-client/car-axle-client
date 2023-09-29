import { create_element } from "../../../UILib";
import { UIManager } from "../../../UIManager";
import { moduleDefinition } from "../../moduleapi";
import "./pocketbrowser.ts.less"

function render(UI: UIManager) {
    let section = UI.getSectionFromID('pocket')

    if (!section) return

    const iframe_input = create_element(
        "input",
        section.section_content,
        {
            class_name: "cac__pocketbrowser__input",
            type: "text",
            value: "https://bing.com"            
        }
    )
    
    const iframe = create_element(
        "iframe",
        section.section_content,
        {
            id: "cac__pocketbrowser__iframe"
        }
    )

    iframe.setAttribute(
        "src",
        "https://bing.com"
    )

    iframe_input.addEventListener('change', (e) => {
        let link = iframe_input as HTMLInputElement

        iframe.setAttribute(
            "src",
            link.value 
        )
    })
}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render
}

export default plugin;
