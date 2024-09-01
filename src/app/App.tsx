import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LanguageSwitcher from '../features/LanguageSwitcher';
import ZodiacList from '../features/ZodiacList';
import HoroscopeDetail from '../features/HoroscopeDetail/HoroscopeDetail';
import './App.css';

type ZodiacSign =
	| 'aries'
	| 'taurus'
	| 'gemini'
	| 'cancer'
	| 'leo'
	| 'virgo'
	| 'libra'
	| 'scorpio'
	| 'sagittarius'
	| 'capricorn'
	| 'aquarius'
	| 'pisces';

const mockHoroscopeData: Record<
	ZodiacSign,
	{ description: { original: string; translated: string } }
> = {
	aries: {
		description: {
			original:
				'Описание гороскопа для Овна: Сегодня день, полный потенциала для вас, Овен. Принимайте новые вызовы и доверяйте своим инстинктам. Возможности для роста и успеха на горизонте.',
			translated:
				'Aries mock horoscope description: Today is a day full of potential for you, Aries. Embrace new challenges and trust your instincts. Opportunities for growth and success are on the horizon.',
		},
	},
	taurus: {
		description: {
			original:
				'Описание гороскопа для Тельца: Сосредоточьтесь на стабильности и комфорте сегодня. Отличное время для укрепления ваших планов и наслаждения плодами вашего труда. Найдите время для отдыха и оценки мелких радостей жизни.',
			translated:
				'Taurus mock horoscope description: Focus on stability and comfort today. It’s a great time to solidify your plans and enjoy the fruits of your hard work. Take time to relax and appreciate the small joys in life.',
		},
	},
	gemini: {
		description: {
			original:
				'Описание гороскопа для Близнецов: Общение — это ключ к успеху сегодня. Обратитесь к друзьям и коллегам, не стесняйтесь делиться своими идеями. Вы можете найти новые связи и возможности.',
			translated:
				'Gemini mock horoscope description: Communication is key today. Reach out to friends and colleagues, and don’t shy away from sharing your ideas. You might find new connections and opportunities.',
		},
	},
	cancer: {
		description: {
			original:
				'Описание гороскопа для Рака: Ваша интуиция сильна сегодня. Доверяйте своим внутренним ощущениям и сосредоточьтесь на личных отношениях. Хороший день для поддержки и заботы о близких.',
			translated:
				'Cancer mock horoscope description: Your intuition is strong today. Trust your gut feelings and focus on your personal relationships. It’s a good day to nurture and support those you care about.',
		},
	},
	leo: {
		description: {
			original:
				'Описание гороскопа для Льва: Светите ярко сегодня! Ваша харизма и энтузиазм привлекут положительное внимание. Возьмите на себя лидерство в проектах и наслаждайтесь вниманием. Ваша уверенность — ваш главный актив.',
			translated:
				'Leo mock horoscope description: Shine brightly today! Your charisma and enthusiasm will attract positive attention. Take the lead on projects and enjoy the spotlight. Your confidence is your greatest asset.',
		},
	},
	virgo: {
		description: {
			original:
				'Описание гороскопа для Девы: Внимание к деталям будет полезно вам сегодня. Организуйте и спланируйте свои задачи тщательно. Ваши аналитические навыки помогут решить любые возникающие проблемы.',
			translated:
				'Virgo mock horoscope description: Attention to detail will serve you well today. Organize and plan your tasks meticulously. Your analytical skills will help you solve any problems that come your way.',
		},
	},
	libra: {
		description: {
			original:
				'Описание гороскопа для Весов: Ищите баланс и гармонию в окружении. Хороший день для разрешения конфликтов и создания мирной атмосферы. Сосредоточьтесь на отношениях и найдите общий язык с окружающими.',
			translated:
				'Libra mock horoscope description: Seek balance and harmony in your surroundings. It’s a good day to resolve conflicts and create a peaceful environment. Focus on relationships and find common ground with others.',
		},
	},
	scorpio: {
		description: {
			original:
				'Описание гороскопа для Скорпиона: Примите свою страсть и решимость. Отличный день для работы над глубокими и значимыми проектами. Ваша интенсивность поможет вам достичь ваших целей.',
			translated:
				'Scorpio mock horoscope description: Embrace your passion and determination. It’s a great day to tackle deep and meaningful projects. Your intensity will drive you towards achieving your goals.',
		},
	},
	sagittarius: {
		description: {
			original:
				'Описание гороскопа для Стрельца: Приглашают приключения! Исследуйте новые идеи и расширяйте свои горизонты. Отличный день для путешествий или изучения чего-то нового. Примите спонтанность и наслаждайтесь путешествием.',
			translated:
				'Sagittarius mock horoscope description: Adventure calls! Explore new ideas and expand your horizons. It’s a perfect day for travel or learning something new. Embrace spontaneity and enjoy the journey.',
		},
	},
	capricorn: {
		description: {
			original:
				'Описание гороскопа для Козерога: Сосредоточьтесь на своих долгосрочных целях сегодня. Хороший день для проверки вашего прогресса и внесения необходимых корректировок. Трудолюбие и дисциплина в конечном итоге окупятся.',
			translated:
				'Capricorn mock horoscope description: Focus on your long-term goals today. It’s a good day to review your progress and make necessary adjustments. Hard work and discipline will pay off in the end.',
		},
	},
	aquarius: {
		description: {
			original:
				'Описание гороскопа для Водолея: Ваша креативность и оригинальность особенно проявляются сегодня. Примите свои уникальные идеи и делитесь ими с другими. Вы можете вдохновить кого-то или задать новый тренд.',
			translated:
				'Aquarius mock horoscope description: Your creativity and originality are highlighted today. Embrace your unique ideas and share them with others. You might inspire someone or spark a new trend.',
		},
	},
	pisces: {
		description: {
			original:
				'Описание гороскопа для Рыб: Найдите время для размышлений и восстановления. Ваша эмоциональная чувствительность усилена сегодня, так что это хороший день для связи с вашим внутренним «я» и нахождения покоя и ясности.',
			translated:
				'Pisces mock horoscope description: Take time to reflect and recharge. Your emotional sensitivity is heightened today, so it’s a good day to connect with your inner self and find peace and clarity.',
		},
	},
};

function App() {
	const [language, setLanguage] = useState<'original' | 'translated'>(
		'original'
	);
	const [selectedSign, setSelectedSign] = useState<ZodiacSign | ''>('');
	const [detail, setDetail] = useState<{
		original: string;
		translated: string;
	} | null>(null);
	const navigate = useNavigate();
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	useEffect(() => {
		if (window.Telegram && window.Telegram.WebApp) {
			const language_code =
				window.Telegram.WebApp.initDataUnsafe?.user?.language_code || 'ru';
			console.log(window.Telegram.WebApp);
			setLanguage(language_code === 'ru' ? 'original' : 'translated');
			const tg = window.Telegram.WebApp;
			const isDarkTheme = tg.colorScheme === 'dark';
			setTheme(isDarkTheme ? 'dark' : 'light');
			document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
		}
	}, []);

	const handleChangeLanguage = (newLanguage: 'original' | 'translated') => {
		setLanguage(newLanguage);
	};

	const handleClick = async (sign: ZodiacSign) => {
		setSelectedSign(sign);
		try {
			const response = await fetch(`https://poker247tech.ru/get_horoscope/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					sign,
					language,
					period: 'today',
				}),
			});
			if (!response.ok) throw new Error('Network response was not ok');
			const data = await response.json();
			setDetail(data.description);
		} catch (error) {
			setDetail(
				mockHoroscopeData[sign]?.description || 'Failed to load details'
			);
		} finally {
			navigate('/detail');
		}
	};

	const handleCloseDetail = () => {
		setDetail(null);
		setSelectedSign('');
		navigate('/');
	};

	const appStyles = {
		backgroundColor: theme === 'dark' ? '#212121' : '#ffffff',
		color: theme === 'dark' ? '#e0e0e0' : '#333333',
	};

	return (
		<div className='App' style={appStyles}>
			<LanguageSwitcher
				currentLanguage={language}
				onChangeLanguage={handleChangeLanguage}
			/>
			<h1>{language === 'original' ? 'Гороскоп' : 'Horoscope'}</h1>
			<Routes>
				<Route
					path='/'
					element={
						<ZodiacList currentLanguage={language} onClick={handleClick} />
					}
				/>
				<Route
					path='/detail'
					element={
						<HoroscopeDetail
							sign={selectedSign}
							description={detail}
							currentLanguage={language}
							onClose={handleCloseDetail}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
