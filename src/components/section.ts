import { create_element } from '../UILib'
import Button from './button'
import './section.ts.less'

export class Section {
    public id: string
    public nav_button!: HTMLElement
    public enabled: boolean
    public section_title!: HTMLElement
    public section_content!: HTMLElement
    public buttons: Array<Button> = []
    public onShow: Array<() => void> = []
    private _displayName: string
    private _container: Element
    private _description: string
    private _icon: string

    constructor(id: string, display_name: string, description: string, icon: string, container: HTMLElement, main_content: HTMLElement, enabled: boolean = false) {
        this.id = id
        this._displayName = display_name
        this._container = container
        this._description = description
        this._icon = icon
        this.enabled = enabled
        this._create_section_elements(main_content)

        // anti code reuseability
        if (this.id === 'client') {
            this.nav_button.style.position = 'absolute'
            this.nav_button.style.bottom = '8vh'
        } else if (this.id === 'credit') {
            this.nav_button.style.position = 'absolute'
            this.nav_button.style.bottom = '20px'
        }
    }

    _create_section_elements(parent: HTMLElement): void {
        this.nav_button = create_element('div', this._container, {
            class_name: 'cac__section',
            innerHTML: this._icon + this._displayName,
        })
        this.section_content = create_element('div', parent, {
            class_name: 'cac__section__content',
            id: `cac__content__${this.id}`,
        })
        create_element('h1', this.section_content, {
            innerHTML: this._displayName,
            class_name: 'cac__section__title',
        })
        create_element('p', this.section_content, {
            innerHTML: this._description,
            class_name: 'cac__section__description',
        })
    }

    // fat lazy code
    add_button(title: string, description: string, always: boolean, reset: boolean, onEnable: () => void, onDisable: () => void, disabled: boolean): void {
        this.buttons.push(new Button(this.section_content, title, description, always, reset, onEnable, onDisable, disabled))
    }

    get_all_button_values() {
        return this.buttons.map((button) => [button.enabled])
    }

    set_all_button_values_from_array(buttonValues: boolean[][]) {
        for (const [index, value] of buttonValues.entries()) {
            this.buttons[index].values = { enabled: value[0] }
        }
    }

    add_onShow(func: () => void): void {
        this.onShow.push(func)
    }

    // Mouse down is handled by UIManager cause it's a global event
}
