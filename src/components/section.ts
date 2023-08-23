import { createElement } from "../UILib"
import Button from "./button"
import "./section.ts.less"

export class Section {
    public id: string;
    public SECTION!: HTMLElement;
    public ENABLED: boolean;
    public SECTIONTITLE!: HTMLElement;
    public SECTIONCONTENT!: HTMLElement;
    private _displayName: string;
    private _container: Element;
    private _description: string;
    private _icon: string;
    

    constructor(id: string, 
                displayName: string, 
                description: string, 
                icon: string, 
                container: HTMLElement, 
                maincontent: HTMLElement, 
                enabled: boolean = false) {

        this.id = id
        this._displayName = displayName;
        this._container = container;
        this._description = description;
        this._icon = icon;
        this.ENABLED = enabled;
        this._createSectionElements(maincontent);

        // anti code reuseability
        if (this.id === "client") {
            this.SECTION.style.position = "absolute";
            this.SECTION.style.bottom = "7.5vh";
        } else if (this.id === "credit") {
            this.SECTION.style.position = "absolute";
            this.SECTION.style.bottom = "20px";
        }

    }

    _createSectionElements(parent: HTMLElement): void {
        this.SECTION = createElement("div", this._container, { 
            className: "cac__section", 
            innerHTML: this._icon + this._displayName});
        this.SECTIONCONTENT = createElement("div", parent, { className: "cac__section__content", id:`cac__content__${this.id}` });
        createElement("h1", this.SECTIONCONTENT, { innerHTML: this._displayName, className: "cac__section__title" });
        createElement("p", this.SECTIONCONTENT, { innerHTML: this._description, className: "cac__section__description" });
    }

    // fat lazy code
    addButton(title: string, always: boolean, reset: boolean, onClickFunction: (active: boolean, options: Array<boolean | string>) => void, render: boolean = false, options: any /* should nnot be any but here we are.*/): void {
        new Button(this.SECTIONCONTENT, title, always, reset, onClickFunction, render, options)
    }
    // Mouse down is handled by UIManager cause it's a global event
}