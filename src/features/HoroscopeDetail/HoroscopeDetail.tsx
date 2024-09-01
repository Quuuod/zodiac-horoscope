import { useState, useEffect } from 'react';

interface HoroscopeDetailProps {
	sign: string;
	description: { original: string; translated: string } | null;
	currentLanguage: 'original' | 'translated';
	onClose: () => void;
}

const HoroscopeDetail = ({
	description,
	currentLanguage,
	onClose,
}: HoroscopeDetailProps) => {
	const [touchStartX, setTouchStartX] = useState<number | null>(null);

	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchStartX(e.touches[0].clientX);
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		if (touchStartX !== null) {
			const touchEndX = e.changedTouches[0].clientX;
			const swipeDistance = touchEndX - touchStartX;

			if (swipeDistance > 50) {
				onClose();
			}
		}
	};

	return (
		<div
			className='horoscope-detail'
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			<p>{description?.[currentLanguage]}</p>
			<button onClick={onClose}>
				{currentLanguage === 'original' ? 'Назад' : 'Back'}
			</button>
		</div>
	);
};

export default HoroscopeDetail;
