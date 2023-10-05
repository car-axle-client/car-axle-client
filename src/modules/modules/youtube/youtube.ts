import { create_element } from "../../../UILib";
import { UIManager } from "../../../UIManager";
import { moduleDefinition, new_iframe } from "../../moduleapi";
import "./youtubebrowser.ts.less"

function render(UI: UIManager) {
    let section = UI.getSectionFromID('youtube')

    if (!section) return

    const iframe_input = create_element(
        "input",
        section.section_content,
        {
            class_name: "cac__pocketbrowser__input",
            type: "text",
            value: "what it says down there"            
        }
    )

    const iframe = new_iframe(UI, section.section_content, "https://placehold.co/600x400?text=^+paste+video+id+^")

    iframe_input.addEventListener("change", (e) => {
        //@ts-ignore
        // just cause im to lazy to dodge ts errors that will never exist
        iframe.setAttribute("src", `https://youtube.com/embed/${iframe_input.value}`)
    })


}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render
}

export default plugin;
