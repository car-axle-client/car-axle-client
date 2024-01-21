import { Components } from '../penexutils'
import { MainContent } from './components/maincontent.component'
import { Sidebar } from './components/sidebar.component'
import sections from '../assets/sections.json'
import content from '../assets/sections-content'

const components: Components = new Components()
let sidebar: Sidebar = new Sidebar()
components.addComponent(sidebar)
let allContent: MainContent[] = []

for (let section of sections) {
    allContent.push(new MainContent(section.display_name, section.description, content[section.id], section.default || false))
    components.addComponent(allContent[allContent.length - 1])
}

sidebar.bindContent(allContent)

export { components }
