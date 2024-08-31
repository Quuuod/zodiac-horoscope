import './HoroscopeDetail.css';

interface HoroscopeDetailProps {
	sign: string;
	description: string;
	onClose: () => void;
	currentLanguage: 'original' | 'translated';
}

const HoroscopeDetail: React.FC<HoroscopeDetailProps> = ({
	sign,
	description,
	currentLanguage,
	onClose,
}) => {
	return (
		<div className='horoscope-detail'>
			<h2>{sign}</h2>
			<p>{description}</p>
			<button onClick={onClose}>
				{currentLanguage === 'original' ? 'Назад' : 'Back'}
			</button>
		</div>
	);
};

export default HoroscopeDetail;
