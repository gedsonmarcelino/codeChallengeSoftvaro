// import axios from 'axios'
// import ModckAdapter from 'axios-mock-adapter'
import { api } from "../api"
import { loadNews } from "."

jest.mock('../../services/api')

describe('Latest News', () => {
	it('should return 1 latests news', async () => {
		const dataMock = {
			data: {
				articles: [
					{
						author: 'Test',
						content: 'Lorem ipsum dolor...',
						description: 'Teste 111',
						publishedAt: '2020-01-01 10:00:00',
						title: 'My title',
						url: 'https://google.com',
						urlToImage: 'https://myimage.com/itsme.png'
					}
				]
			}
		} as any

		(api.get as jest.Mock).mockResolvedValue(dataMock)

		const result = await loadNews(1)
		expect(result).toHaveLength(1)

		expect(api.get).toHaveBeenCalledTimes(1);
	})

	it('should return 3 latests news', async () => {
		const dataMock = {
			data: {
				articles: [
					{
						author: 'Test 1',
						content: 'Lorem ipsum dolor...',
						description: 'Teste 111',
						publishedAt: '2020-01-01 10:00:00',
						title: 'My title',
						url: 'https://google.com',
						urlToImage: 'https://myimage.com/itsme.png'
					},
					{
						author: 'Test 2',
						content: 'Lorem ipsum dolor...',
						description: 'Teste 111',
						publishedAt: '2020-01-01 10:00:00',
						title: 'My title',
						url: 'https://google.com',
						urlToImage: 'https://myimage.com/itsme.png'
					},
					{
						author: 'Test 3',
						content: 'Lorem ipsum dolor...',
						description: 'Teste 111',
						publishedAt: '2020-01-01 10:00:00',
						title: 'My title',
						url: 'https://google.com',
						urlToImage: 'https://myimage.com/itsme.png'
					},
				]
			}
		} as any

		(api.get as jest.Mock).mockResolvedValue(dataMock)

		const result = await loadNews()
		expect(result).toHaveLength(3)

		expect(api.get).toHaveBeenCalledTimes(1);
	})
})