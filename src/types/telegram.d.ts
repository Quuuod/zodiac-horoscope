interface TelegramWebApp {
	BackButton: {
		isVisible: boolean;
		show: () => void;
		hide: () => void;
		onClick: (callback: () => void) => void;
		offClick: (callback: () => void) => void;
	};
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
