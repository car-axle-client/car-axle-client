import { createElement } from "../UILib"
import "./section.ts.less"

export class Section {
    public id: string;
    public SECTION: HTMLElement;
    public ENABLED: boolean;
    public SECTIONTITLE: HTMLElement;
    public SECTIONCONTENT: HTMLElement;
    private _displayName: string;
    private _container: Element;
    

    constructor(id: string, displayName: string, icon: string, container: HTMLElement, maincontent: HTMLElement, enabled: boolean = false) {
        this.id = id
        this._displayName = displayName;
        this._container = container;
        this.ENABLED = enabled;
        this.SECTION = createElement("div", container, { 
            className: "cac__section", 
            innerHTML: icon + displayName});
        this.SECTIONCONTENT = createElement("div", maincontent, { className: "cac__section__content", id:`cac__content__${id}` });
        this.SECTIONTITLE = createElement("h1", this.SECTIONCONTENT, { innerHTML: displayName, className: "cac__section__title", id:`cac__title__${id}` });

        // anti code reuseability
        if (this.id === "client") {
            this.SECTION.style.position = "absolute";
            this.SECTION.style.bottom = "20px";
        }

    }

    // Mouse down is handled by UIManager cause it's a global event
}