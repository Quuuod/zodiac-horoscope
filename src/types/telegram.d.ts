interface TelegramWebApp {
	close: () => void;
	themeParams: TelegramThemeParams;
	colorScheme: string;
	initDataUnsafe: {
		user: {
			language_code: string;
		};
	};
}

interface Window {
	Telegram: {
		WebApp: TelegramWebApp;
	};
}

interface TelegramThemeParams {
	bg_color?: string;
	button_color?: string;
	text_color?: string;
	hint_color?: string;
	link_color?: string;
	secondary_bg_color?: string;
}
