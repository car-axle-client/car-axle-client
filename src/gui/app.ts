import { Components } from '../penexutils'
import { MainContent } from './components/maincontent.component'
import { Sidebar } from './components/sidebar.component'

const components: Components = new Components()
components.addComponent(new Sidebar())
components.addComponent(new MainContent())

export { components }
