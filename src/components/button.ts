import { Component, createElement } from "../UILib"
import "./button.ts.less"

export default class Button implements Component {
    public ENABLED: boolean = false;
    public BUTTON!: HTMLElement;
    public parent: HTMLElement
    private title: string;
    private always: boolean = false;
    private reset: boolean = false;
    
    constructor(parent: HTMLElement, title: string, render: boolean = false) {
        this.parent = parent
        this.title = title
        render && this.render()
    }

    _handleMouseDown(e: MouseEvent) {
        if (e.button !== 0) return;
        this.ENABLED = !this.ENABLED;
        this.BUTTON.classList.toggle("cac__button--enabled", this.ENABLED)

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