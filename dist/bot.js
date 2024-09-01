"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
var token = '7398983608:AAF4lr1srcretktCsDPGKI9MQnhZf2O4d0o';
var bot = new node_telegram_bot_api_1.default(token, { polling: true });
var appUrl = 'https://quuuod.github.io/zodiac-horoscope';
bot.onText(/\/start/, function (msg) {
    var chatId = msg.chat.id;
    console.log('Received /start command');
    var opts = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open Mini App',
                        web_app: { url: appUrl },
                    },
                ],
            ],
        },
    };
    bot
        .sendMessage(chatId, 'Welcome! Click the button below to open the mini app:', opts)
        .then(function () {
        console.log('Message sent');
    })
        .catch(function (err) {
        console.error('Error sending message:', err);
    });
});
