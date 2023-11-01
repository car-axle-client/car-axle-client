import { Component, create_element } from '../UILib'
import './button.ts.less'

enum optionType {
    checkbox = 'checkbox',
    text = 'text',
}

type menuOption = {
    title: string
    type: optionType
    default: boolean | string
    option_params: string[]
}

// menuoptions are not finished yet
export default class Button implements Component {
    public enabled: boolean = false
    public button!: HTMLElement
    public menuContainer!: HTMLElement
    public parent: HTMLElement
    private title: string
    private onEnable: () => void
    private onDisable: () => void
    private always: boolean
    private reset: boolean
    private disabled: boolean
    private description: string
    private menu_options: menuOption[]
    private menu_values: Array<boolean | string> = []

    constructor(
        parent: HTMLElement,
        title: string,
        description: string,
        always: boolean,
        reset: boolean,
        onEnable: () => void,
        onDisable: () => void,
        disabled: boolean,
        menu_options: menuOption[] = []
    ) {
        this.parent = parent
        this.title = title
        this.description = description
        this.onEnable = onEnable
        this.onDisable = onDisable
        this.always = always
        this.reset = reset
        this.menu_options = menu_options
        this.disabled = disabled

        this.render()
    }

    _toggle() {
        this.enabled = !this.enabled
        this.button.classList.toggle('cac__button--enabled', this.enabled)
        this.enabled ? this.onEnable() : this.onDisable()
    }

    _getMenuValues() {
        this.menu_values = []
        for (let option of this.menuContainer.querySelectorAll(
            '.cac__button__menu-container__option-container'
        )) {
            const checkbox = option.querySelector(
                '.cac__button__menu-container__option-container__checkbox'
            ) as HTMLInputElement
            const text = option.querySelector(
                '.cac__button__menu-container__option-container__text'
            ) as HTMLInputElement

            if (checkbox) {
                this.menu_values.push(checkbox.checked)
            } else if (text) {
                this.menu_values.push(text.value)
            }
        }
    }

    _handleMouseDown(e: MouseEvent) {
        if (e.button !== 0 || (this.enabled && this.always)) return
        this._toggle()

        if (this.reset)
            setTimeout(() => {
                this._toggle()
            }, 1000)
    }

    render() {
        this.button = create_element('button', this.parent, {
            class_name: 'cac__button',
            innerHTML: `<div>${this.title}<p>${this.description}</p></div>`,
        })

        if (!this.disabled) {
            this.button.addEventListener(
                'mousedown',
                this._handleMouseDown.bind(this)
            )
        }

        this.button.addEventListener('contextmenu', (e) => e.preventDefault())

        if (this.menu_options.length > 0) {
            this.menuContainer = create_element('div', this.parent, {
                class_name: 'cac__button__menu-container',
            })
        }
    }

    // idk if this is every used lmaoooooooo
    get values() {
        if (this.reset) return { enabled: false }
        // adding options l8r
        return {
            enabled: this.enabled,
        }
    }

    set values(values: { enabled: boolean }) {
        values['enabled'] && this._toggle()
    }
}
