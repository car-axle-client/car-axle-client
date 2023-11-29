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

        // opacity animation
        this.container.animate(
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
            }
        )
    }

    enable_section(section: Section): void {
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

    disable_section(section: Section): void {
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
        if (this.enabled_section) this.disable_section(this.enabled_section)
        this.enable_section(section)
    }

    newSection(id: string, displayName: string, description: string, icon: string, enabled: boolean = false): Section {
        let section: Section = new Section(id, displayName, description, icon, this.sidebar, this.main_content, enabled)

        section.nav_button.onmousedown = () => this._handleSectionMouseDown(section)
        enabled && this.enable_section(section)

        this.sections.push(section)
        return section
    }
    toggleUI(): void {
        if (!this.container.parentElement) {
            document.body.appendChild(this.container)
            this.gui.animate(
                [
                    {
                        transform: 'translateX(-100%)',
                    },
                    {
                        transform: 'translateX(0%)',
                    },
                ],
                {
                    duration: 500,
                    fill: 'forwards',
                    easing: 'ease-out',
                }
            )

            return
        } else {
            this.container.remove()
        }
    }

    private addModule(_module: moduleDefinition) {
        if (_module.custom_render) {
            try {
                _module.render(this)
            } catch (error) {
                console.error(error)
            }
            return
        }

        const section = this.getSectionFromID(_module.section)
        if (section) {
            section.add_button(
                _module.display_name,
                _module.description || _module.display_name,
                _module.always || false,
                _module.reset || false,
                _module.onactive || none,
                _module.ondisable || none,
                _module.disabled || false
            )
        }
    }

    addModulesFromList(list: moduleDefinition[]) {
        for (const _module of list) {
            this.addModule(_module)
        }
    }

    addModulesFromImport(modules: any) {
        for (const _moduleKey of Object.keys(modules)) {
            if (!modules[_moduleKey].default) continue

            const moduleDefault = modules[_moduleKey].default

            if (Array.isArray(moduleDefault)) {
                this.addModulesFromList(moduleDefault)
            } else {
                this.addModule(moduleDefault)
            }
        }
    }

    getSectionFromID(id: string): Section | undefined {
        return this.sections.find((section) => section.id === id)
    }
}
