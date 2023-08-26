import { Icon, createElement } from "../../UILib"
import "./icon.ts.less"


export default class RemoveSave implements Icon {   
    public parent: HTMLElement;
    public icon: string;
    public name: string;
    public hoverName!: HTMLElement; 
    private iconElement!: HTMLElement;

    constructor(parent: HTMLElement, name: string, icon: string) {
        this.parent = parent;
        this.icon = icon;
        this.name = name; 
        
        this.render()

        this.iconElement.onclick = this.action
    }

    action(): void {
        localStorage.removeItem('car-axle-client')
    }

    render(): void {
        this.iconElement = createElement("button", this.parent, {
            className: "cac__tabbar__button",
            innerHTML: this.icon
        })
        
        this.hoverName = createElement("p", this.iconElement, {
            className: "cac__tabbar__button__hovername",
            innerHTML: this.name
        })
        
    }
}
