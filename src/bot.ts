import TelegramBot from 'node-telegram-bot-api';

const token = '7398983608:AAF4lr1srcretktCsDPGKI9MQnhZf2O4d0o';
const bot = new TelegramBot(token, { polling: true });

const appUrl = 'https://quuuod.github.io/zodiac-horoscope';

bot.onText(/\/start/, (msg) => {
	const chatId = msg.chat.id;

	console.log('Received /start command');

	const opts: TelegramBot.SendMessageOptions = {
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
		.sendMessage(
			chatId,
			'Welcome! Click the button below to open the mini app:',
			opts
		)
		.then(() => {
			console.log('Message sent');
		})
		.catch((err) => {
			console.error('Error sending message:', err);
		});
});
