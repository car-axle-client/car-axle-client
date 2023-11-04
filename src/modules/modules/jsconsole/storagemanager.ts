import { create_element } from '../../../UILib';
import { UIManager } from '../../../UIManager';
import { moduleDefinition } from '../../moduleapi';
import "./storage_manager.ts.less"

function render(UI: UIManager) {
    let section = UI.getSectionFromID("js")
    let section_content = section?.section_content

    if (!section_content) throw new Error("section_content is null")

    let storage_container = create_element("div", section_content, {
        class_name: "cac__storage__container"
    });

    let storage_header = create_element("div", storage_container, {
        class_name: "cac__storage__header"
    });

    let storage_header_selectedbackground = create_element("div", storage_header, {
        class_name: "cac__storage__header__selectedbackground"
    });

    let storage_header_cookiebutton = create_element("button", storage_header, {
        class_name: "cac__storage__header__button",
        innerHTML: "Cookies",
    });

    let storage_header_localbutton = create_element("button", storage_header, {
        class_name: "cac__storage__header__button",
        innerHTML: "Local Storage",
    });

    let storage_header_sessionbutton = create_element("button", storage_header, {
        class_name: "cac__storage__header__button",
        innerHTML: "Session Storage",
    });


    let tab_buttons = [storage_header_cookiebutton, storage_header_localbutton, storage_header_sessionbutton];


    tab_buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // centers the selected background and takes into account the button's width and selected background's width
            storage_header_selectedbackground.style.left = button.offsetLeft + (button.offsetWidth / 2) - (storage_header_selectedbackground.offsetWidth / 2) + "px";
            storage_header_selectedbackground.style.top = button.offsetTop - 5 + "px";
        });
    });
    
    
    // clicks the first button to center the selected background
    setTimeout(() => {
        storage_header_cookiebutton.click();
    }, 100);
}


const plugin: moduleDefinition = {
    custom_render: true,
    render: render
}

export default plugin;
