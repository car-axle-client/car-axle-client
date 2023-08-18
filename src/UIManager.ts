import { Section } from "./components/section"
import { createElement } from "./UILib"
import "./global/style.less"



export class UIManager {
    public CONTAINER: HTMLElement
    public GUI: HTMLElement
    public SIDEBAR: HTMLElement
    public SECTIONS: Section[] = []
    public ENABLED_SECTION!: Section
    public MAINCONTENT: HTMLElement
    private _sectionBackground: HTMLElement


    constructor() {
        this.CONTAINER = createElement('div', document.body, {id:"cac__CONTAINER"})
        this.GUI = createElement('div', this.CONTAINER, {id:"cac__GUI"})
        this.SIDEBAR = createElement('div', this.GUI, {id:"cac__SIDEBAR"})
        this.MAINCONTENT = createElement('div', this.GUI, {id:"cac__MAINCONTENT"})
        this._sectionBackground = createElement('div', this.SIDEBAR, {id:"cac__section__BACKGROUND"})

        // Aesthetic
        createElement('div', this.SIDEBAR, {id:"cac__LOGO", innerHTML: 'car axle client'})

    }

    private _enableSection(section: Section): void {
        this.ENABLED_SECTION = section
        section.ENABLED = true
        section.SECTIONCONTENT.style.display = 'flex'
        this._sectionBackground.animate([
            {top: `${section.SECTION.offsetTop}px`}],
            {duration: 1000, fill: 'forwards', easing: 'ease'})
        section.SECTIONCONTENT.animate([
            {opacity: 0, transform: 'scale(1.1)'},
            {opacity: 1, transform: 'scale(1)'}],
            {duration: 500, fill: 'forwards', easing: 'ease'})
    }

    private _disableSection(section: Section): void {
        section.ENABLED = false
        section.SECTIONCONTENT.animate([
            {opacity: 1, transform: 'scale(1)'},
            {opacity: 0, transform: 'scale(0.9)'}],
            {duration: 500, fill: 'forwards', easing: 'ease'})
        setTimeout(() => {
            section.SECTIONCONTENT.style.display = 'none'
        }, 490)
    }

    private _handleSectionMouseDown(section: Section): void {
        if (section.ENABLED) return
        if (this.ENABLED_SECTION) this._disableSection(this.ENABLED_SECTION)
        this._enableSection(section)
    }

    newSection(id: string, displayName: string, description: string, icon: string, enabled: boolean = false, customStyle: string = ''): Section {
        let section: Section = new Section(id, displayName, description, icon, this.SIDEBAR, this.MAINCONTENT, enabled)
        section.SECTION.onmousedown = () => this._handleSectionMouseDown(section)
        enabled && this._enableSection(section)

        this.SECTIONS.push(section)
        return section
    }

    toggleUI(): void {
        if (this.CONTAINER.style.display === 'none') {
            this.CONTAINER.style.display = 'flex'
            this.GUI.animate([
                {transform: 'scale(0)'},
                {transform: 'scale(1)'}
            ],
                {duration: 500, 
                fill: 'forwards', 
                easing: 'ease'}
            )
        } else {
            this.CONTAINER.style.display = 'none'
        }
    }


    getSection(id: string): Section | undefined {
        return this.SECTIONS.find(section => section.id === id)
    }

}

export function TestUI(): void {
    createElement('h1', document.body, {innerHTML:"penguin"})
}