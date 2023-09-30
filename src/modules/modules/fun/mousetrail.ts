import { create_element } from "../../../UILib";
import { moduleDefinition } from "../../moduleapi";
import "./mousetrail.ts.less"

function create_trail() {

    let allElements = document.querySelectorAll('*')
    allElements.forEach((element) => {
        let htmlelement = element as HTMLElement
        htmlelement.style.cursor = "none"
    })

    let trail_large = create_element(
        "div",
        document.body,
        {
            "id": "custom_cursor_large"
        }
    )   

    let trail_small = create_element(
        "div",
        document.body,
        {
            "id": "custom_cursor_small"
        }
    )
    if (!trail_large) return

    document.addEventListener('mousemove', (e) => {
        trail_large.animate(
            [
                {
                    "left": e.clientX - 15 + "px",
                    "top": e.clientY - 15 + "px"
                }
            ],
            {
                "easing": "ease",
                "duration": 10,
                "fill": "forwards"
            }
        )

        trail_small.animate(
            [
                {
                    "left": e.clientX - 7 + "px",
                    "top": e.clientY - 7 + "px"
                }
            ],
            {
                "easing": "ease",
                "duration": 1250,
                "fill": "forwards"
            }
        )
    })
}

const plugin: moduleDefinition = {
    custom_render: false,
    display_name: "Mouse Trail",
    description: "decent looking mouse trail",
    id: "mousetrail",
    section: "fun",
    always: true,
    onactive: create_trail
}

export default plugin;
