"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = exports.CREATOR = exports.NAME = exports.ITERATION = exports.VERSION = void 0;
exports.VERSION = 0;
exports.ITERATION = 1;
exports.NAME = 'car axle';
exports.CREATOR = 'penguinify';
exports.ENV = 'production';
if (document.location.hostname.includes('localhost')) {
    exports.ENV = 'development ~ hello, from penguinify';
}
else if (document.location.hostname.includes('github.io')) {
    exports.ENV = 'beta ;-;';
}
