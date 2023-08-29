import { Component, createElement } from "../UILib"
import "./button.ts.less"

enum optionType {
    checkbox = 'checkbox',
    text = 'text'
}

type menuOption = {
    title: string,
    type:  optionType,
    default: boolean | string,
    optionParams: string[]
}

export default class Button implements Component {
    public enabled: boolean = false;
    public button!: HTMLElement;
    public menuContainer!: HTMLElement;
    public parent: HTMLElement
    private title: string;
    private onClickFunction: (active: boolean, options:Array<boolean | string>) => void;
    private always: boolean
    private reset: boolean
    private menuOptions: menuOption[]
    private menuValues: Array<boolean | string> = []
    
    constructor(parent: HTMLElement,
                title: string, 
                always: boolean, 
                reset:boolean, 
                onClickFunction: (active: boolean, options: Array<boolean | string>) => void, 
                render: boolean = false,
                menuOptions: menuOption[]) {

        this.parent = parent
        this.title = title
        this.onClickFunction = onClickFunction;
        this.always = always
        this.reset = reset
        this.menuOptions = menuOptions

        if (menuOptions.length > 0) this.title += '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="cac__button__menuicon" ><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>'

        render && this.render()
    }

    _toggle() {
        this.enabled = !this.enabled
        this.button.classList.toggle("cac__button--enabled", this.enabled)
        this.enabled ? this.onClickFunction(true, this.menuValues) : this.onClickFunction(false, this.menuValues)
    }

    _getMenuValues() {
        this.menuValues = []
        for (let option of this.menuContainer.querySelectorAll(".cac__button__menu-container__option-container")) {
            const checkbox = option.querySelector(".cac__button__menu-container__option-container__checkbox") as HTMLInputElement
            const text = option.querySelector(".cac__button__menu-container__option-container__text") as HTMLInputElement

            if (checkbox) {
                this.menuValues.push(checkbox.checked)
            } else if (text) {
                this.menuValues.push(text.value)
            }
        }

    }

    _updateFunctionOptions(): void {
        this._getMenuValues()
        this._toggle()
        this._toggle()
    }

    _addMenuOption(option: menuOption) {
        const optionContainer = createElement("div", this.menuContainer, { className: "cac__button__menu-container__option-container" })
        createElement("p", optionContainer, { className: "cac__button__menu-container__option-container__title", innerHTML: option.title })

        switch (option.type) { 
            case optionType.checkbox:
                const checkbox = createElement("input", optionContainer, { type: "checkbox", className: "cac__button__menu-container__option-container__checkbox" }) as HTMLInputElement
                checkbox.checked = option.default as boolean
                checkbox.addEventListener("change", this._updateFunctionOptions.bind(this))
                break;
            case optionType.text:
                const textInput = createElement("input", optionContainer, { type: "text", className: "cac__button__menu-container__option-container__text" }) as HTMLInputElement
                textInput.value = option.default as string
                textInput.addEventListener("change", this._updateFunctionOptions.bind(this))
                break;
        }
    }

    _toggleMenu(e: MouseEvent) {
        e.preventDefault()
        this.menuContainer.classList.toggle("cac__button__menu-container--enabled")
        this.button.querySelector('svg')?.classList.toggle("cac__button__menuicon--enabled")
    }

    _handleMouseDown(e: MouseEvent) {
        if (e.button === 2 && this.menuOptions?.length > 0) this._toggleMenu(e)
        if (e.button !== 0 || this.enabled && this.always) return;
        this._toggle()

        if (this.reset) setTimeout(() => {
            this._toggle()
        }, 1000)
    }

    render() {
        this.button = createElement("button", this.parent, { className: "cac__button", innerHTML: this.title })
        this.button.addEventListener("mousedown", this._handleMouseDown.bind(this))
        this.button.addEventListener("contextmenu", (e) => e.preventDefault())

        if (this.menuOptions.length > 0) {
            this.menuContainer = createElement("div", this.parent, { className: "cac__button__menu-container" })
            for (let option of this.menuOptions) {
                this._addMenuOption(option)
            }
        }
    }

    // idk if this is every used lmaoooooooo
    get values() {
        if (this.reset) return {enabled: false}
        // adding options l8r
        return {
            enabled: this.enabled
        }
    }

    set values (values: {"enabled": boolean}) {
        values['enabled'] && this._toggle()
    }
}
