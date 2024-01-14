"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindPenFromId = exports.Components = exports.Component = exports.Pen = void 0;
const layout_1 = require("./layout");
const app_1 = __importDefault(require("./app"));
function setup(app) {
    document.body.innerHTML = layout_1.layout + document.body.innerHTML;
    let mainApp = document.getElementById(app);
    if (!mainApp) {
        throw new Error('Main app element not found');
    }
    app_1.default.pens.forEach((pen) => {
        mainApp?.appendChild(pen.element);
    });
}
exports.default = setup;
class Pen {
    id;
    element;
    listeners;
    constructor(id, tag, listeners = []) {
        this.element = document.createElement(tag);
        this.id = id;
        this.listeners = listeners;
        this.listeners.forEach((listener) => this.addListener(listener));
    }
    addListener(listener) {
        this.element.addEventListener(listener.name, listener.callback, { once: listener.once || false });
        this.listeners.push(listener);
    }
    removeListener(listener) {
        this.element.removeEventListener(listener.name, listener.callback);
        this.listeners = this.listeners.filter((l) => l !== listener);
    }
    static fromHTML(html) {
        let element = document.createElement('div');
        element.innerHTML = html;
        let children = element.children;
        if (children.length === 1) {
            return new Pen(children[0].id, children[0].tagName);
        }
        else {
            let pens = [];
            for (let i = 0; i < children.length; i++) {
                pens.push(new Pen(children[i].id, children[i].tagName));
            }
            return pens;
        }
    }
}
exports.Pen = Pen;
class Component {
    pens = [];
    containComponent(component) {
        let pen = component.penIt();
        if (Array.isArray(pen)) {
            this.pens.push(...pen);
        }
        else {
            this.pens.push(pen);
        }
    }
}
exports.Component = Component;
class Components {
    pens = [];
    constructor() { }
    addComponent(component) {
        let pen = component.penIt();
        if (Array.isArray(pen)) {
            this.pens.push(...pen);
        }
        else {
            this.pens.push(pen);
        }
    }
}
exports.Components = Components;
// added implementation outside of the class SINCE IT IS UNNECESSARY IN 75% OF THE CASES
function FindPenFromId(id, pens) {
    return pens.find((pen) => pen.id === id);
}
exports.FindPenFromId = FindPenFromId;
