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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var LanguageSwitcher_1 = __importDefault(require("../features/LanguageSwitcher"));
var ZodiacList_1 = __importDefault(require("../features/ZodiacList"));
var HoroscopeDetail_1 = __importDefault(require("../features/HoroscopeDetail/HoroscopeDetail"));
require("./App.css");
var mockHoroscopeData = {
    aries: {
        description: 'Aries mock horoscope description: Today is a day full of potential for you, Aries. Embrace new challenges and trust your instincts. Opportunities for growth and success are on the horizon.',
    },
    taurus: {
        description: 'Taurus mock horoscope description: Focus on stability and comfort today. It’s a great time to solidify your plans and enjoy the fruits of your hard work. Take time to relax and appreciate the small joys in life.',
    },
    gemini: {
        description: 'Gemini mock horoscope description: Communication is key today. Reach out to friends and colleagues, and don’t shy away from sharing your ideas. You might find new connections and opportunities.',
    },
    cancer: {
        description: 'Cancer mock horoscope description: Your intuition is strong today. Trust your gut feelings and focus on your personal relationships. It’s a good day to nurture and support those you care about.',
    },
    leo: {
        description: 'Leo mock horoscope description: Shine brightly today! Your charisma and enthusiasm will attract positive attention. Take the lead on projects and enjoy the spotlight. Your confidence is your greatest asset.',
    },
    virgo: {
        description: 'Virgo mock horoscope description: Attention to detail will serve you well today. Organize and plan your tasks meticulously. Your analytical skills will help you solve any problems that come your way.',
    },
    libra: {
        description: 'Libra mock horoscope description: Seek balance and harmony in your surroundings. It’s a good day to resolve conflicts and create a peaceful environment. Focus on relationships and find common ground with others.',
    },
    scorpio: {
        description: 'Scorpio mock horoscope description: Embrace your passion and determination. It’s a great day to tackle deep and meaningful projects. Your intensity will drive you towards achieving your goals.',
    },
    sagittarius: {
        description: 'Sagittarius mock horoscope description: Adventure calls! Explore new ideas and expand your horizons. It’s a perfect day for travel or learning something new. Embrace spontaneity and enjoy the journey.',
    },
    capricorn: {
        description: 'Capricorn mock horoscope description: Focus on your long-term goals today. It’s a good day to review your progress and make necessary adjustments. Hard work and discipline will pay off in the end.',
    },
    aquarius: {
        description: 'Aquarius mock horoscope description: Your creativity and originality are highlighted today. Embrace your unique ideas and share them with others. You might inspire someone or spark a new trend.',
    },
    pisces: {
        description: 'Pisces mock horoscope description: Take time to reflect and recharge. Your emotional sensitivity is heightened today, so it’s a good day to connect with your inner self and find peace and clarity.',
    },
};
function App() {
    var _this = this;
    var _a = (0, react_1.useState)('original'), language = _a[0], setLanguage = _a[1];
    var _b = (0, react_1.useState)(''), selectedSign = _b[0], setSelectedSign = _b[1];
    var _c = (0, react_1.useState)(null), detail = _c[0], setDetail = _c[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _d = (0, react_1.useState)('light'), theme = _d[0], setTheme = _d[1];
    (0, react_1.useEffect)(function () {
        if (window.Telegram && window.Telegram.WebApp) {
            var language_code = window.Telegram.WebApp.initDataUnsafe.language_code;
            setLanguage(language_code === 'original' ? 'original' : 'translated');
            var tg = window.Telegram.WebApp;
            console.log('Telegram WebApp themeParams:', tg.themeParams.colorScheme);
            var isDarkTheme = tg.themeParams.colorScheme === 'dark';
            setTheme(isDarkTheme ? 'dark' : 'light');
        }
    }, []);
    var handleChangeLanguage = function (newLanguage) {
        setLanguage(newLanguage);
    };
    var handleClick = function (sign) { return __awaiter(_this, void 0, void 0, function () {
        var response, data, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setSelectedSign(sign);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, fetch("https://poker247tech.ru/get_horoscope/", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                sign: sign,
                                language: language,
                                period: 'today',
                            }),
                        })];
                case 2:
                    response = _b.sent();
                    if (!response.ok)
                        throw new Error('Network response was not ok');
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _b.sent();
                    setDetail(data.description);
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _b.sent();
                    setDetail(((_a = mockHoroscopeData[sign]) === null || _a === void 0 ? void 0 : _a.description) || 'Failed to load details');
                    return [3 /*break*/, 6];
                case 5:
                    navigate('/detail');
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var handleCloseDetail = function () {
        setDetail(null);
        setSelectedSign('');
        navigate('/');
    };
    var appStyles = {
        backgroundColor: theme === 'dark' ? '#1e1e1e' : '#212121',
        color: theme === 'dark' ? '#212121' : '#000000',
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: 'App', style: appStyles }, { children: [(0, jsx_runtime_1.jsx)(LanguageSwitcher_1.default, { currentLanguage: language, onChangeLanguage: handleChangeLanguage }), (0, jsx_runtime_1.jsx)("h1", { children: language === 'original' ? 'Гороскоп' : 'Horoscope' }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/', element: (0, jsx_runtime_1.jsx)(ZodiacList_1.default, { currentLanguage: language, onClick: handleClick }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/detail', element: (0, jsx_runtime_1.jsx)(HoroscopeDetail_1.default, { sign: selectedSign, description: detail || 'Loading...', currentLanguage: language, onClose: handleCloseDetail }) })] })] })));
}
exports.default = App;
