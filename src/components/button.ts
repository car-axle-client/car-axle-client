import { Component, createElement } from "../UILib"
import "./button.ts.less"

export default class Button implements Component {
    public ENABLED: boolean = false;
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
    }

    render() {
        let button = createElement("button", this.parent, { className: "cac__button", innerHTML: this.title })
        
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