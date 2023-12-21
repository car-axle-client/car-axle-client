import { create_element } from "../../../UILib";
import { UIManager } from "../../../UIManager";
import { moduleDefinition } from "../../moduleapi";

function run_link(url: string) {
    fetch(url)
        .then((res) => res.text())
        .then((text) => eval(text))
}

function render(UI: UIManager) {
    let section_content = UI.getSectionFromID("js")?.section_content
    if (!section_content) return

    let input = create_element("input", section_content, {
        value: "URL to inject",
        class_name: "cac__module__input"
    }) as HTMLInputElement

    let normalInject = create_element("button", section_content, {
        innerHTML: "Inject",
        class_name: "cac__button"
    })

    normalInject.addEventListener("mousedown", () => {
        run_link(input.value)
        UI.notificationbar.new_notification("Injected script", `Injected script from ${input.value}`)
    })

}

const plugin: moduleDefinition = {
    custom_render: true,
    render: render,
}

export default plugin
