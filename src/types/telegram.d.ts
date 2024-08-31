interface TelegramWebApp {
	initDataUnsafe: {
		language_code: string;
	};
}

interface Window {
	Telegram: {
		WebApp: TelegramWebApp;
	};
}
