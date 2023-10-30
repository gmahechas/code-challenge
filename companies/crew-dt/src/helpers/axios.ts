import axios from 'axios'

export const initAxios = async () => {
	const footballApiUrl = process.env.FOOTBALL_API_URL;
	const footballApiToken = process.env.FOOTBALL_API_TOKEN;

	if (!footballApiUrl || !footballApiToken) {
		throw new Error('Missing environment variables FOOTBALL_API_URL and FOOTBALL_API_TOKEN');
	}
	axios.defaults.baseURL = footballApiUrl;
	axios.defaults.headers.common['X-Auth-Token'] = footballApiToken;
};