import { Component, createElement } from "../UILib"
import "./button.ts.less"

enum optionType {
    checkbox,
    button,
    radio
}

type menuOption = {
    title: string,
    type:  optionType,
    default: boolean | string,
    optionParams: string[]
}

export default class Button implements Component {
    public ENABLED: boolean = false;
    public BUTTON!: HTMLElement;
    public MENUCONTAINER!: HTMLElement;
    public parent: HTMLElement
    private title: string;
    private onClickFunction: (active: boolean) => void;
    private always: boolean
    private reset: boolean
    private menuOptions: menuOption[]
    
    constructor(parent: HTMLElement,
                title: string, 
                always: boolean, 
                reset:boolean, 
                onClickFunction: (active: boolean) => void, 
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
        this.ENABLED = !this.ENABLED
        this.BUTTON.classList.toggle("cac__button--enabled", this.ENABLED)

        this.ENABLED ? this.onClickFunction(true) : this.onClickFunction(false)
    }

    _toggleMenu(e: MouseEvent) {
        e.preventDefault()
        this.MENUCONTAINER.classList.toggle("cac__button__menu-container--enabled")
        this.BUTTON.querySelector('svg')?.classList.toggle("cac__button__menuicon--enabled")
    }

    _handleMouseDown(e: MouseEvent) {
        if (e.button === 2 && this.menuOptions?.length > 0) this._toggleMenu(e)
        if (e.button !== 0 || this.ENABLED && this.always) return;
        this._toggle()

        if (this.reset) setTimeout(() => {
            this._toggle()
        }, 250)
    }

    render() {
        this.BUTTON = createElement("button", this.parent, { className: "cac__button", innerHTML: this.title })
        if (this.menuOptions.length > 0) this.MENUCONTAINER = createElement("div", this.parent, { className: "cac__button__menu-container" })
        this.BUTTON.addEventListener("mousedown", this._handleMouseDown.bind(this))
        this.BUTTON.addEventListener("contextmenu", (e) => e.preventDefault())
    }

    get values() {
        return {
            title: this.title,
            enabled: this.ENABLED,
            always: this.always,
            reset: this.reset
        }
    }
}