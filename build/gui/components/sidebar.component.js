"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = void 0;
const Renderer_1 = require("../Renderer");
const constants_1 = require("../../constants");
// import json from '../../assets/sections.json'
const Renderer_2 = require("../Renderer");
// import { SidebarButton } from './sidebarbutton.component'
// import { SidebarBackground } from './sidebarbackground.component'
class Sidebar extends Renderer_1.Component {
    constructor() {
        super();
    }
    penIt() {
        var sections = '';
        // json.forEach((section: any) => {
        //     sections += new SidebarButton(section.display_name, section.icon).render()
        // })
        return (Renderer_2.Pen.fromHTML(`
            <div class="sidebar layer2 rounded-md">
                <div class="header rounded-md">${constants_1.NAME}</div>
                <div class="sections">
                    ${sections}
                </div>
            </div>
        `) || []);
    }
}
exports.Sidebar = Sidebar;
