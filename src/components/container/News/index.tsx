import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Article, loadNews } from '../../../services/news';
import { formatDate } from '../../../utils/format';

import 'react-loading-skeleton/dist/skeleton.css'
import './styles.scss'

const NEWS_AMOUNT = 3;

function News() {

	// --- States ---
	const [loading, setLoading] = useState(true)
	const [news, setNews] = useState<Article[]>([])

	// --- Functions ---
	async function loadData() {
		try {
			setLoading(true)
			const data = await loadNews(NEWS_AMOUNT)
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

	// --- Renders ---
	function renderLoading() {
		const arr = Array.from({ length: NEWS_AMOUNT }, (v, k) => k + 1)
		return (
			<SkeletonTheme>
				{arr.map(item => (
					<div key={`loading-${item}`} className="news-item" >
						<Skeleton width={160} height={160} />
						<div className="news-item-data">
							<Skeleton height={50} style={{ marginBottom: '10px' }} />
							<Skeleton count={3} height={25} style={{ margin: '5px 0' }} />
						</div>
					</div>
				))}
			</SkeletonTheme>
		)
	}

	return (
		<section id='news'>
			<span className='divider' />
			<div className='news-content'>
				<h2>Latest News</h2>


				<div className="news-list">
					{loading
						? renderLoading()
						:
						<>
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
						</>
					}
				</div>
			</div>
		</section >
	);
}
export default News;
