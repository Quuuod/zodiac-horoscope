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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./index.css");
var LanguageSwitcher = function (_a) {
    var currentLanguage = _a.currentLanguage, onChangeLanguage = _a.onChangeLanguage;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'language-switcher' }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ className: currentLanguage === 'original' ? 'active' : '', onClick: function () { return onChangeLanguage('original'); } }, { children: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" })), (0, jsx_runtime_1.jsx)("button", __assign({ className: currentLanguage === 'translated' ? 'active' : '', onClick: function () { return onChangeLanguage('translated'); } }, { children: "English" }))] })));
};
exports.default = LanguageSwitcher;
