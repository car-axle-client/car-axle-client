import { Icon, createElement } from "../../UILib"
import { UIManager } from "../../UIManager";
import "./icon.ts.less"


export default class AddSave implements Icon{   
    public parent: HTMLElement;
    public icon: string;
    public name: string;
    public hoverName!: HTMLElement; 
    private iconElement!: HTMLElement;
    private UIManager: UIManager;

    constructor(parent: HTMLElement, name: string, icon: string, UIManager: UIManager) {
        this.parent = parent;
        this.icon = icon;
        this.name = name;
        console.log(UIManager)
        this.UIManager = UIManager
        console.log(this.UIManager)
        this.render()
    }

    action(): void {
        let values = [];
            
        
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
