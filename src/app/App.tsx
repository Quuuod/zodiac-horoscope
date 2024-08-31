import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LanguageSwitcher from '../features/LanguageSwitcher';
import ZodiacList from '../features/ZodiacList';
import HoroscopeDetail from '../features/HoroscopeDetail/HoroscopeDetail';
import './App.css';

type ZodiacSign =
	| 'Aries'
	| 'Taurus'
	| 'Gemini'
	| 'Cancer'
	| 'Leo'
	| 'Virgo'
	| 'Libra'
	| 'Scorpio'
	| 'Sagittarius'
	| 'Capricorn'
	| 'Aquarius'
	| 'Pisces';

const mockHoroscopeData: Record<ZodiacSign, { description: string }> = {
	Aries: {
		description:
			'Aries mock horoscope description: Today is a day full of potential for you, Aries. Embrace new challenges and trust your instincts. Opportunities for growth and success are on the horizon.',
	},
	Taurus: {
		description:
			'Taurus mock horoscope description: Focus on stability and comfort today. It’s a great time to solidify your plans and enjoy the fruits of your hard work. Take time to relax and appreciate the small joys in life.',
	},
	Gemini: {
		description:
			'Gemini mock horoscope description: Communication is key today. Reach out to friends and colleagues, and don’t shy away from sharing your ideas. You might find new connections and opportunities.',
	},
	Cancer: {
		description:
			'Cancer mock horoscope description: Your intuition is strong today. Trust your gut feelings and focus on your personal relationships. It’s a good day to nurture and support those you care about.',
	},
	Leo: {
		description:
			'Leo mock horoscope description: Shine brightly today! Your charisma and enthusiasm will attract positive attention. Take the lead on projects and enjoy the spotlight. Your confidence is your greatest asset.',
	},
	Virgo: {
		description:
			'Virgo mock horoscope description: Attention to detail will serve you well today. Organize and plan your tasks meticulously. Your analytical skills will help you solve any problems that come your way.',
	},
	Libra: {
		description:
			'Libra mock horoscope description: Seek balance and harmony in your surroundings. It’s a good day to resolve conflicts and create a peaceful environment. Focus on relationships and find common ground with others.',
	},
	Scorpio: {
		description:
			'Scorpio mock horoscope description: Embrace your passion and determination. It’s a great day to tackle deep and meaningful projects. Your intensity will drive you towards achieving your goals.',
	},
	Sagittarius: {
		description:
			'Sagittarius mock horoscope description: Adventure calls! Explore new ideas and expand your horizons. It’s a perfect day for travel or learning something new. Embrace spontaneity and enjoy the journey.',
	},
	Capricorn: {
		description:
			'Capricorn mock horoscope description: Focus on your long-term goals today. It’s a good day to review your progress and make necessary adjustments. Hard work and discipline will pay off in the end.',
	},
	Aquarius: {
		description:
			'Aquarius mock horoscope description: Your creativity and originality are highlighted today. Embrace your unique ideas and share them with others. You might inspire someone or spark a new trend.',
	},
	Pisces: {
		description:
			'Pisces mock horoscope description: Take time to reflect and recharge. Your emotional sensitivity is heightened today, so it’s a good day to connect with your inner self and find peace and clarity.',
	},
};

function App() {
	const [language, setLanguage] = useState<'original' | 'translated'>(
		'original'
	);
	const [selectedSign, setSelectedSign] = useState<ZodiacSign | ''>('');
	const [detail, setDetail] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (window.Telegram && window.Telegram.WebApp) {
			const { language_code } = window.Telegram.WebApp.initDataUnsafe;
			setLanguage(language_code === 'original' ? 'original' : 'translated');
		}
	}, []);

	const handleChangeLanguage = (newLanguage: 'original' | 'translated') => {
		setLanguage(newLanguage);
	};

	const handleClick = async (sign: ZodiacSign) => {
		setSelectedSign(sign);
		setLoading(true);
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
			setLoading(false);
			navigate('/detail');
		}
	};

	const handleCloseDetail = () => {
		setDetail(null);
		setSelectedSign('');
		navigate('/');
	};

	return (
		<div className='App'>
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
							description={detail || 'Loading...'}
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
