"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Renderer_1 = require("./Renderer");
const sidebar_component_1 = require("./components/sidebar.component");
const components = new Renderer_1.Components();
components.addComponent(new sidebar_component_1.Sidebar());
exports.default = components;
