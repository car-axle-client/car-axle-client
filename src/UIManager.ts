// good luck to whoever is reading this
// you will really fucking need it

import { Section } from './components/section'
import { create_element } from './UILib'
import { moduleDefinition, none } from './modules/moduleapi'
import { LOGO, CLIENTNAMESHORT } from './static/constant'
import NotificationBar from './components/notificationbar'
import './static/style.less'

export class UIManager {
    public container!: HTMLElement
    public gui!: HTMLElement
    public sidebar!: HTMLElement
    public sections: Array<Section> = []
    public enabled_section!: Section
    public main_content!: HTMLElement
    public notification_bar!: NotificationBar
    public tabbar!: HTMLElement
    public notificationbar!: NotificationBar
    private _section_background!: HTMLElement
    private _animation_options: KeyframeAnimationOptions = {
        duration: 500,
        fill: 'forwards',
        easing: 'ease',
    }

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

        // Notification (its a component)
        this.notificationbar = new NotificationBar(this.container)

        // Aesthetic
        create_element('div', this.sidebar, {
            id: 'cac__LOGO',
            innerHTML: `${CLIENTNAMESHORT}`,
        }).style.backgroundImage = `url(${LOGO})`

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
            this._animation_options
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
            this._animation_options
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
            this._animation_options
        )

        setTimeout(() => {
            section.section_content.style.display = 'block'
            section.section_content.style.pointerEvents = 'auto'
        }, 500)

        section.onShow.forEach((func) => func())
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
            this._animation_options
        )
        setTimeout(() => {
            section.section_content.style.display = 'none'
            section.section_content.style.pointerEvents = 'none;'
        }, 950)
    }

    private _handleSectionMouseDown(section: Section): void {
        if (section.enabled) return
        if (this.enabled_section) this.disable_section(this.enabled_section)
        this.enable_section(section)
    }

    newSection(id: string, displayName: string, description: string, icon: string): Section {
        const enabled = this.sections.length === 0
        let section: Section = new Section(id, displayName, description, icon, this.sidebar, this.main_content, enabled)

        section.nav_button.onmousedown = () => this._handleSectionMouseDown(section)
        enabled && this.enable_section(section)

        this.sections.push(section)
        return section
    }
    toggleUI(): void {
        if (!this.container.parentElement) {
            document.body.appendChild(this.container)
        } else {
            this.container.remove()
        }
    }

    private addModule(_module: moduleDefinition) {
        if (_module.custom_render) {
            try {
                _module.render(this)
                if (_module.onShow) {
                    const section = this.getSectionFromID(_module.onShow[0])
                    if (section) {
                        section.add_onShow(() => {
                            if (_module.onShow) _module.onShow[1](this)
                        })
                    }
                }
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

            if (_module.onShow) {
                section.add_onShow(_module.onShow)
            }
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
