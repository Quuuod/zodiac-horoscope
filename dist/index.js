"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var client_1 = __importDefault(require("react-dom/client"));
var react_router_dom_1 = require("react-router-dom");
var App_1 = __importDefault(require("./app/App"));
var rootElement = document.getElementById('root');
if (rootElement) {
    client_1.default.createRoot(rootElement).render((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, __assign({ basename: '/zodiac-horoscope' }, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}) })));
}
