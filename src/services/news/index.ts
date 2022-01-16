import { api } from "../api"

const API_KEY = process.env.REACT_APP_NEWS_API_KEY

export interface Article {
	author: string;
	content: string;
	description: string;
	publishedAt: Date;
	title: string;
	url: string;
	urlToImage: string;
}

interface ResultLoadNews {
	articles: Article[]
}

export const loadNews = async ( limit = 3 ) : Promise<Article[]> => {
	const params = {
		q: 'nanny',
		pageSize: limit, 
		apiKey: API_KEY
	}

	const result = await api.get<ResultLoadNews>('/', { params })

	return result.data.articles
}