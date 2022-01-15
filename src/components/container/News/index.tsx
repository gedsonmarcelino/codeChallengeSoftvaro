import React, { useEffect, useState } from 'react';
import { Article, loadNews } from '../../../services/news';
import { formatDate } from '../../../utils/format';

import './styles.scss'

function News() {

	// --- States ---
	const [loading, setLoading] = useState(true)
	const [news, setNews] = useState<Article[]>([])

	// --- Functions ---
	async function loadData() {
		try {
			setLoading(true)
			const data = await loadNews()
			setNews(data)
		} catch (error) {
			console.log('[LOAD NEWS - ERROR]', error);
		} finally {
			setLoading(false)
		}
	}

	// --- Effects ---
	useEffect(() => {
		loadData()
	}, [])

	if (loading) return <p>Loading...</p>

	return (
		<section id='news'>
			<span className='divider' />
			<div className='news-content'>
				<h2>Latest News</h2>

				<div className="news-list">
					{news.map(item => {
						const date = new Date(item.publishedAt)
						const key = date.getTime()
						const dateFormated = formatDate(date)
						return (
							<a key={key} className="news-item" href={item.url} target="_blank" rel="noreferrer">
								<img src={item.urlToImage} alt={item.title} />
								<div className="news-item-data">
									<h3>
										{item.title}
										<span>{dateFormated}</span>
									</h3>
									<p>{item.description}</p>
								</div>
							</a>
						)
					})}
				</div>
			</div>
		</section>
	);
}
export default News;
