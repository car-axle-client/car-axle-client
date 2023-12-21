import { UIManager } from "../../../UIManager";

function render(UI: UIManager) {
    let section_content = UI.getSectionFromID("js")?.section_content
    if (!section_content) return

    let input = document.createElement("input")
}
