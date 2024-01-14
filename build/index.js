"use strict";
// welcome to nextgen
// have fun ;)
// ~ penguinify
//
// car axle client uses a in house ui framework.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Renderer_1 = __importDefault(require("./gui/Renderer"));
function main() {
    console.info(`${constants_1.VERSION}.${constants_1.ITERATION} ${constants_1.NAME} by ${constants_1.CREATOR} (${constants_1.ENV}), thank you from penguinify`);
    (0, Renderer_1.default)('app-fuk-u');
}
// i hope this works...
main();
