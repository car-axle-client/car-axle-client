import { Icon, createElement } from '../../UILib'
import { UIManager } from '../../UIManager'
import './icon.ts.less'

export default class AddSave implements Icon {
    public parent: HTMLElement
    public icon: string
    public name: string
    public hoverName!: HTMLElement
    private iconElement!: HTMLElement

    constructor(
        parent: HTMLElement,
        name: string,
        icon: string,
        UI: UIManager
    ) {
        this.parent = parent
        this.icon = icon
        this.name = name
        this.render()
        this.iconElement.onclick = () => {
            this.action(UI)
        }
    }

    action(UI: UIManager): void {
        console.log('%cAttempting Save', 'color:blue; font-size: 3vw;')

        // too lazy to rigidly define values
        let cacStorage: Array<any> = []

        for (let section of UI.sections) {
            let buttonValues = section.getAllButtonValues()
            console.log('%c' + section.id, 'font-size:1.25vw;')
            console.table(buttonValues)
            cacStorage.push({ sectionID: section.id, buttonValues })
        }

        localStorage.setItem('car-axle-client', JSON.stringify(cacStorage))
    }

    render(): void {
        this.iconElement = createElement('button', this.parent, {
            className: 'cac__tabbar__button',
            innerHTML: this.icon,
        })

        this.hoverName = createElement('p', this.iconElement, {
            className: 'cac__tabbar__button__hovername',
            innerHTML: this.name,
        })
    }
}
