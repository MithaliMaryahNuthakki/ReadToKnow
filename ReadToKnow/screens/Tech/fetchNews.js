import { API_KEY } from '../env';

const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`

export async function getUSANews() {
	let result = await fetch(url).then(response => response.json());

	return result.articles;
}