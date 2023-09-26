import { Section } from './components/section'
import RemoveSave from './components/icons/removesave'
import AddSave from './components/icons/saveicon'
import Destroy from './components/icons/xicon'
import Hide from './components/icons/hideicon'
import { createElement } from './UILib'
import { moduleDefinition } from './modules/moduleapi'
import { VERSION, CLIENTNAME } from './global/constant'
import './global/style.less'

export class UIManager {
    public container!: HTMLElement
    public gui!: HTMLElement
    public sidebar!: HTMLElement
    public sections: Array<Section> = []
    public enabledSection!: Section
    public mainContent!: HTMLElement
    public tabbar!: HTMLElement
    private _sectionBackground!: HTMLElement

    constructor() {
        this._createGUI()
        this._createIcons()
    }

    private _createGUI(): void {
        this.container = createElement('div', document.body, {
            id: 'cac__CONTAINER',
        })
        this.gui = createElement('div', this.container, {
            id: 'cac__GUI',
        })
        this.sidebar = createElement('div', this.gui, {
            id: 'cac__SIDEBAR',
        })
        this.mainContent = createElement('div', this.gui, {
            id: 'cac__MAINCONTENT',
        })
        this._sectionBackground = createElement('div', this.sidebar, {
            id: 'cac__section__BACKGROUND',
        })
        this.tabbar = createElement('div', this.mainContent, {
            id: 'cac__TABBAR',
        })

        // Aesthetic
        createElement('div', this.sidebar, {
            id: 'cac__LOGO',
            innerHTML: `${CLIENTNAME} v${VERSION}`,
        })
    }

    private _createIcons(): void {
        new AddSave(
            this.tabbar,
            'New Save',
            '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/></svg>',
            this
        )
        new RemoveSave(
            this.tabbar,
            'Remove Save',
            '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M448 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64zM184 272c-13.3 0-24 10.7-24 24s10.7 24 24 24H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H184z"/></svg>'
        )
        new Hide(
            this.tabbar,
            'Hide',
            '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>'
        )
        new Destroy(
            this.tabbar,
            'Self Destruct',
            '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>'
        )
    }

    private _enableSection(section: Section): void {
        this.enabledSection = section
        section.enabled = true
        section.sectionContent.style.display = 'block'
        section.sectionContent.style.pointerEvents = 'auto'

        this._sectionBackground.animate(
            [
                {
                    top: `${section.navButton.offsetTop}px`,
                },
            ],
            {
                duration: 1000,
                fill: 'forwards',
                easing: 'ease',
            }
        )
        section.sectionContent.animate(
            [
                {
                    opacity: 0,
                    transform: 'scale(1.1)',
                },
                {
                    opacity: 1,
                    transform: 'scale(1)',
                },
            ],
            {
                duration: 500,
                fill: 'forwards',
                easing: 'ease',
            }
        )
    }

    private _disableSection(section: Section): void {
        section.enabled = false
        section.sectionContent.animate(
            [
                {
                    opacity: 1,
                    transform: 'scale(1)',
                },
                {
                    opacity: 0,
                    transform: 'scale(0.9)',
                },
            ],
            {
                duration: 500,
                fill: 'forwards',
                easing: 'ease',
            }
        )
        setTimeout(() => {
            section.sectionContent.style.display = 'none'
            section.sectionContent.style.pointerEvents = 'none;'
        }, 490)
    }

    private _handleSectionMouseDown(section: Section): void {
        if (section.enabled) return
        if (this.enabledSection) this._disableSection(this.enabledSection)
        this._enableSection(section)
    }

    newSection(
        id: string,
        displayName: string,
        description: string,
        icon: string,
        enabled: boolean = false
    ): Section {
        let section: Section = new Section(
            id,
            displayName,
            description,
            icon,
            this.sidebar,
            this.mainContent,
            enabled
        )

        section.navButton.onmousedown = () =>
            this._handleSectionMouseDown(section)
        enabled && this._enableSection(section)

        this.sections.push(section)
        return section
    }
    toggleUI(): void {
        if (this.container.style.display === 'none') {
            this.container.style.display = 'flex'
            this.gui.animate(
                [
                    {
                        transform: 'scale(0)',
                    },
                    {
                        transform: 'scale(1)',
                    },
                ],
                {
                    duration: 500,
                    fill: 'forwards',
                    easing: 'ease-out',
                }
            )

            return
        }

        this.container.style.display = 'none'
    }

    addModulesfromList(list: moduleDefinition[]) {
        for (let _module of list) {
            let section = this.getSectionFromID(_module['section'])
            if (!section) continue

            section.addButton(
                _module['displayName'],
                _module['always'] || false,
                _module['reset'] || false,
                _module['onactive'],
                _module['ondisable']
            )
        }
    }

    addModulesFromImport(modules: any) {
        for (let _moduleKey of Object.keys(modules)) {
            if (Array.isArray(modules[_moduleKey]['default'])) {
                this.addModulesfromList(modules[_moduleKey]['default'])

                continue
            }

            let _module: moduleDefinition = modules[_moduleKey]['default']
            let section = this.getSectionFromID(_module['section'])

            if (!section) continue

            section.addButton(
                _module['displayName'],
                _module['always'] || false,
                _module['reset'] || false,
                _module['onactive'],
                _module['ondisable']
            )
        }
    }

    getSectionFromID(id: string): Section | undefined {
        return this.sections.find((section) => section.id === id)
    }
}
