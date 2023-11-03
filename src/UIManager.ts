import { Section } from './components/section'
import { create_element } from './UILib'
import { moduleDefinition, none } from './modules/moduleapi'
import { VERSION, CLIENTNAME } from './static/constant'
import './static/style.less'

export class UIManager {
    public container!: HTMLElement
    public gui!: HTMLElement
    public sidebar!: HTMLElement
    public sections: Array<Section> = []
    public enabled_section!: Section
    public main_content!: HTMLElement
    public tabbar!: HTMLElement
    private _section_background!: HTMLElement

    constructor() {
        this._createGUI()
    }

    private _createGUI(): void {
        this.container = create_element('div', document.body, {
            id: 'cac__CONTAINER',
        })
        this.gui = create_element('div', this.container, {
            id: 'cac__GUI',
        })
        this.sidebar = create_element('div', this.gui, {
            id: 'cac__SIDEBAR',
        })
        this.main_content = create_element('div', this.gui, {
            id: 'cac__MAINCONTENT',
        })
        this._section_background = create_element('div', this.sidebar, {
            id: 'cac__section__BACKGROUND',
        })
        this.tabbar = create_element('div', this.main_content, {
            id: 'cac__TABBAR',
        })

        // Aesthetic
        create_element('div', this.sidebar, {
            id: 'cac__LOGO',
            innerHTML: `${CLIENTNAME} v${VERSION}`,
        })
    }

    private _enable_section(section: Section): void {
        this.enabled_section = section
        section.enabled = true
        section.section_content.style.display = 'block'
        section.section_content.style.pointerEvents = 'auto'

        this._section_background.animate(
            [
                {
                    top: `${section.nav_button.offsetTop}px`,
                },
            ],
            {
                duration: 1000,
                fill: 'forwards',
                easing: 'ease',
            }
        )
        section.section_content.animate(
            [
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                },
            ],
            {
                duration: 500,
                fill: 'forwards',
                easing: 'ease',
            }
        )
        
        setTimeout(() => {
            section.section_content.style.display = 'block'
            section.section_content.style.pointerEvents = 'auto'
        }, 500)
    }

    private _disable_section(section: Section): void {
        section.enabled = false
        section.section_content.animate(
            [
                {
                    opacity: 1,
                },
                {
                    opacity: 0,
                },
            ],
            {
                duration: 500,
                fill: 'forwards',
                easing: 'ease',
            }
        )
        setTimeout(() => {
            section.section_content.style.display = 'none'
            section.section_content.style.pointerEvents = 'none;'
        }, 490)
    }

    private _handleSectionMouseDown(section: Section): void {
        if (section.enabled) return
        if (this.enabled_section) this._disable_section(this.enabled_section)
        this._enable_section(section)
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
            this.main_content,
            enabled
        )

        section.nav_button.onmousedown = () =>
            this._handleSectionMouseDown(section)
        enabled && this._enable_section(section)

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
            // Override
            if (_module['custom_render']) {
                try {
                    _module['render'](this)
                } catch (error) {
                    console.error(error)
                }
                continue
            }

            let section = this.getSectionFromID(_module['section'])
            if (!section) continue

            section.add_button(
                _module['display_name'],
                _module['description'] || _module['display_name'],
                _module['always'] || false,
                _module['reset'] || false,
                _module['onactive'] || none,
                _module['ondisable'] || none,
                _module['disabled'] || false
            )
        }
    }

    addModulesFromImport(modules: any) {
        for (let _moduleKey of Object.keys(modules)) {
            if (!modules[_moduleKey]['default']) continue

            if (Array.isArray(modules[_moduleKey]['default'])) {
                this.addModulesfromList(modules[_moduleKey]['default'])
                continue
            }

            let _module: moduleDefinition = modules[_moduleKey]['default']

            // Override
            if (_module['custom_render']) {
                _module['render'](this)
                continue
            }

            let section = this.getSectionFromID(_module['section'])

            if (!section) continue

            section.add_button(
                _module['display_name'],
                _module['description'] || _module['display_name'],
                _module['always'] || false,
                _module['reset'] || false,
                _module['onactive'] || none,
                _module['ondisable'] || none,
                _module['disabled'] || false
            )
        }
    }

    getSectionFromID(id: string): Section | undefined {
        return this.sections.find((section) => section.id === id)
    }
}
