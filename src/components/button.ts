import { Component, createElement } from "../UILib"
import "./button.ts.less"

export default class Button implements Component {
    public ENABLED: boolean = false;
    public BUTTON!: HTMLElement;
    public parent: HTMLElement
    private title: string;
    private onClickFunction: (active: boolean) => void;
    private always: boolean
    private reset: boolean
    
    constructor(parent: HTMLElement, title: string, always: boolean, reset:boolean, onClickFunction: (active: boolean) => void, render: boolean = false) {
        this.parent = parent
        this.title = title
        this.onClickFunction = onClickFunction;
        this.always = always
        this.reset = reset
        render && this.render()
    }

    _toggle() {
        this.ENABLED = !this.ENABLED
        this.BUTTON.classList.toggle("cac__button--enabled", this.ENABLED)

        this.ENABLED ? this.onClickFunction(true) : this.onClickFunction(false)
    }

    _handleMouseDown(e: MouseEvent) {
        if (e.button !== 0 || this.ENABLED && this.always) return;
        this._toggle()

        if (this.reset) setTimeout(() => {
            this._toggle()
        }, 250)
    }

    render() {
        this.BUTTON = createElement("button", this.parent, { className: "cac__button", innerHTML: this.title })
        this.BUTTON.addEventListener("mousedown", this._handleMouseDown.bind(this))
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