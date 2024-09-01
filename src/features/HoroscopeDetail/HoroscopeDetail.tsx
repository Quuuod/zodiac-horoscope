import './HoroscopeDetail.css';

interface HoroscopeDetailProps {
	sign: string;
	description: { original: string; translated: string } | null;
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
			<h2>{sign.charAt(0).toUpperCase() + sign.slice(1)}</h2>
			<p>
				{description
					? currentLanguage === 'original'
						? description.original
						: description.translated
					: 'Loading...'}
			</p>
			<button onClick={onClose}>
				{currentLanguage === 'original' ? 'Назад' : 'Back'}
			</button>
		</div>
	);
};

export default HoroscopeDetail;
