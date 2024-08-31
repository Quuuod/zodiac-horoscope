import './index.css';

interface LanguageSwitcherProps {
	currentLanguage: 'original' | 'translated';
	onChangeLanguage: (language: 'original' | 'translated') => void;
}

const LanguageSwitcher = ({
	currentLanguage,
	onChangeLanguage,
}: LanguageSwitcherProps) => {
	return (
		<div className='language-switcher'>
			<button
				className={currentLanguage === 'original' ? 'active' : ''}
				onClick={() => onChangeLanguage('original')}
			>
				Русский
			</button>
			<button
				className={currentLanguage === 'translated' ? 'active' : ''}
				onClick={() => onChangeLanguage('translated')}
			>
				English
			</button>
		</div>
	);
};

export default LanguageSwitcher;
