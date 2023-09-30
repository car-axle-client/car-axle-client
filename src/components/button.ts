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

        if (menu_options.length > 0)
            this.title +=
                '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="cac__button__menuicon" ><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>'

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

    _updateFunctionOptions(): void {
        this._getMenuValues()
        this._toggle()
        this._toggle()
    }

    _addMenuOption(option: menuOption) {
        const optionContainer = create_element('div', this.menuContainer, {
            class_name: 'cac__button__menu-container__option-container',
        })
        create_element('p', optionContainer, {
            class_name: 'cac__button__menu-container__option-container__title',
            innerHTML: option.title,
        })

        switch (option.type) {
            case optionType.checkbox:
                const checkbox = create_element('input', optionContainer, {
                    type: 'checkbox',
                    class_name:
                        'cac__button__menu-container__option-container__checkbox',
                }) as HTMLInputElement
                checkbox.checked = option.default as boolean
                checkbox.addEventListener(
                    'change',
                    this._updateFunctionOptions.bind(this)
                )
                break
            case optionType.text:
                const textInput = create_element('input', optionContainer, {
                    type: 'text',
                    class_name:
                        'cac__button__menu-container__option-container__text',
                }) as HTMLInputElement
                textInput.value = option.default as string
                textInput.addEventListener(
                    'change',
                    this._updateFunctionOptions.bind(this)
                )
                break
        }
    }

    _toggleMenu(e: MouseEvent) {
        e.preventDefault()
        this.menuContainer.classList.toggle(
            'cac__button__menu-container--enabled'
        )
        this.button
            .querySelector('svg')
            ?.classList.toggle('cac__button__menuicon--enabled')
    }

    _handleMouseDown(e: MouseEvent) {
        if (e.button === 2 && this.menu_options?.length > 0) this._toggleMenu(e)
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
            for (let option of this.menu_options) {
                this._addMenuOption(option)
            }
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
