const zodiacSigns = [
	{ name: 'Aries', icon: '♈️' },
	{ name: 'Taurus', icon: '♉️' },
	{ name: 'Gemini', icon: '♊️' },
	{ name: 'Cancer', icon: '♋️' },
	{ name: 'Leo', icon: '♌️' },
	{ name: 'Virgo', icon: '♍️' },
	{ name: 'Libra', icon: '♎️' },
	{ name: 'Sagittarius', icon: '♐️' },
	{ name: 'Scorpio', icon: '♏️' },
	{ name: 'Capricorn', icon: '♑️' },
	{ name: 'Aquarius', icon: '♒️' },
	{ name: 'Pisces', icon: '♓️' },
] as const;

type ZodiacSign = (typeof zodiacSigns)[number]['name'];

const zodiacPeriods: Record<
	'original' | 'translated',
	Record<ZodiacSign, string>
> = {
	original: {
		Aries: '21 Марта - 19 Апреля',
		Taurus: '20 Апреля - 20 Мая',
		Gemini: '21 Мая - 20 Июня',
		Cancer: '21 Июня - 22 Июля',
		Leo: '23 Июля - 22 Августа',
		Virgo: '23 Августа - 22 Сентября',
		Libra: '23 Сентября - 22 Октября',
		Scorpio: '23 Октября - 21 Ноября',
		Sagittarius: '22 Ноября - 21 Декабря',
		Capricorn: '22 Декабря - 19 Января',
		Aquarius: '20 Января - 18 Февраля',
		Pisces: '19 Февраля - 20 Марта',
	},
	translated: {
		Aries: 'March 21 - April 19',
		Taurus: 'April 20 - May 20',
		Gemini: 'May 21 - June 20',
		Cancer: 'June 21 - July 22',
		Leo: 'July 23 - August 22',
		Virgo: 'August 23 - September 22',
		Libra: 'September 23 - October 22',
		Scorpio: 'October 23 - November 21',
		Sagittarius: 'November 22 - December 21',
		Capricorn: 'December 22 - January 19',
		Aquarius: 'January 20 - February 18',
		Pisces: 'February 19 - March 20',
	},
};

interface ZodiacListProps {
	currentLanguage: 'original' | 'translated';
	onClick: (sign: ZodiacSign) => void;
}

const ZodiacList: React.FC<ZodiacListProps> = ({
	currentLanguage,
	onClick,
}) => {
	return (
		<div className='zodiac-list'>
			{zodiacSigns.map((zodiac) => (
				<div
					key={zodiac.name}
					className='zodiac-item'
					onClick={() => onClick(zodiac.name)}
				>
					<h2>
						{zodiac.icon}{' '}
						{zodiac.name.charAt(0).toUpperCase() + zodiac.name.slice(1)}
					</h2>
					<p>{zodiacPeriods[currentLanguage][zodiac.name]}</p>
				</div>
			))}
		</div>
	);
};

export default ZodiacList;
