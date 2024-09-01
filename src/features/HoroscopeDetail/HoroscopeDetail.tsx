import { useState } from 'react';
import './HoroscopeDetail.css';

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
	const [swipeClass, setSwipeClass] = useState<string>('');

	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchStartX(e.touches[0].clientX);
		setSwipeClass('');
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		if (touchStartX !== null) {
			const touchEndX = e.changedTouches[0].clientX;
			const swipeDistance = touchEndX - touchStartX;

			if (swipeDistance > 50) {
				setSwipeClass('swipe-out');
				setTimeout(onClose, 300);
			}
		}
	};

	return (
		<div
			className={`horoscope-detail ${swipeClass}`}
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
