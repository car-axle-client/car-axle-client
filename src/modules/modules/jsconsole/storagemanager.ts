import { create_element } from '../../../UILib';
import { UIManager } from '../../../UIManager';
import { moduleDefinition } from '../../moduleapi';
import "./storage_manager.ts.less"

function render(UI: UIManager) {
    let section = UI.getSectionFromID("js")
    let section_content = section?.section_content

    if (!section_content || !section) throw new Error("section_content is null")

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

    let storage_content = create_element("div", storage_container, {
        class_name: "cac__storage__content"
    });

    let storage_content_cookie = create_element("div", storage_content, {
        class_name: "cac__storage__content__container"
    });

    let storage_content_local = create_element("div", storage_content, {
        class_name: "cac__storage__content__container"
    });

    let storage_content_session = create_element("div", storage_content, {
        class_name: "cac__storage__content__container"
    });

    let storage_content_containers = [storage_content_cookie, storage_content_local, storage_content_session];

    tab_buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            //takes into account width of button and width of selected background to get center of button
            storage_header_selectedbackground.style.left = `${button.offsetLeft + (button.offsetWidth / 2) - (storage_header_selectedbackground.offsetWidth / 2)}px`
            storage_header_selectedbackground.style.top = `${button.offsetTop}px`

            storage_content_containers.forEach((container) => {
                container.classList.remove("cac__storage__content__container--selected")
            })
            storage_content_containers[index].classList.add("cac__storage__content__container--selected")
        })
    });

    let storage_content_cookie_table = create_element("table", storage_content_cookie, {
        class_name: "cac__storage__content__table",
    });

    


}


const plugin: moduleDefinition = {
    custom_render: true,
    render: render
}

export default plugin;
