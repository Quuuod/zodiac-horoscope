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
require("./HoroscopeDetail.css");
var HoroscopeDetail = function (_a) {
    var sign = _a.sign, description = _a.description, currentLanguage = _a.currentLanguage, onClose = _a.onClose;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'horoscope-detail' }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: sign.charAt(0).toUpperCase() + sign.slice(1) }), (0, jsx_runtime_1.jsx)("p", { children: description }), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: onClose }, { children: currentLanguage === 'original' ? 'Назад' : 'Back' }))] })));
};
exports.default = HoroscopeDetail;
