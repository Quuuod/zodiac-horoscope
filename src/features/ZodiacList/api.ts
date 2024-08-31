export const fetchZodiacDetail = async (
	sign: string,
	language: 'original' | 'translated'
) => {
	return fetch('https://poker247tech.ru/get_horoscope/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			sign,
			language,
			period: 'today',
		}),
	}).then((response) => {
		if (!response.ok) {
			return Promise.reject('Failed to fetch zodiac details');
		}
		return response.json();
	});
};
