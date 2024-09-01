const zodiacSigns = [
	{ name: 'aries', icon: '♈️' },
	{ name: 'taurus', icon: '♉️' },
	{ name: 'gemini', icon: '♊️' },
	{ name: 'cancer', icon: '♋️' },
	{ name: 'leo', icon: '♌️' },
	{ name: 'virgo', icon: '♍️' },
	{ name: 'libra', icon: '♎️' },
	{ name: 'sagittarius', icon: '♐️' },
	{ name: 'scorpio', icon: '♏️' },
	{ name: 'capricorn', icon: '♑️' },
	{ name: 'aquarius', icon: '♒️' },
	{ name: 'pisces', icon: '♓️' },
] as const;

type ZodiacSign = (typeof zodiacSigns)[number]['name'];

const zodiacPeriods: Record<
	'original' | 'translated',
	Record<ZodiacSign, string>
> = {
	original: {
		aries: '21 Марта - 19 Апреля',
		taurus: '20 Апреля - 20 Мая',
		gemini: '21 Мая - 20 Июня',
		cancer: '21 Июня - 22 Июля',
		leo: '23 Июля - 22 Августа',
		virgo: '23 Августа - 22 Сентября',
		libra: '23 Сентября - 22 Октября',
		scorpio: '23 Октября - 21 Ноября',
		sagittarius: '22 Ноября - 21 Декабря',
		capricorn: '22 Декабря - 19 Января',
		aquarius: '20 Января - 18 Февраля',
		pisces: '19 Февраля - 20 Марта',
	},
	translated: {
		aries: 'March 21 - April 19',
		taurus: 'April 20 - May 20',
		gemini: 'May 21 - June 20',
		cancer: 'June 21 - July 22',
		leo: 'July 23 - August 22',
		virgo: 'August 23 - September 22',
		libra: 'September 23 - October 22',
		scorpio: 'October 23 - November 21',
		sagittarius: 'November 22 - December 21',
		capricorn: 'December 22 - January 19',
		aquarius: 'January 20 - February 18',
		pisces: 'February 19 - March 20',
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
