import { Components } from '../penexutils'
import { MainContent } from './components/maincontent.component'
import { Sidebar } from './components/sidebar.component'
import sections from '../assets/sections.json'
import content from '../assets/sections-content'
import { StatusBar } from './components/statusbar.component'
import { NotificationBar } from './components/notificationbar.component'
import { ENV } from '../constants'

const components: Components = new Components()
let sidebar: Sidebar = new Sidebar()
let statusbar: StatusBar = new StatusBar()
let notificationbar: NotificationBar = new NotificationBar()
components.addComponent(sidebar)
components.addComponent(statusbar)

let allContent: MainContent[] = []

if (ENV === 'development') {
    allContent.push(new MainContent('Dev', 'development tools for car axle client', content['dev'], false))
    components.addComponent(allContent[allContent.length - 1])
}

for (let section of sections) {
    allContent.push(new MainContent(section.display_name, section.description, content[section.id], section.default || false))
    components.addComponent(allContent[allContent.length - 1])
}

sidebar.bindContent(allContent)

components.addComponent(notificationbar)
export { components, notificationbar }
