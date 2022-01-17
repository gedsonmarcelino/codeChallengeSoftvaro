// import axios from 'axios'
// import ModckAdapter from 'axios-mock-adapter'
import { api } from '../../services/api'
import { loadNews } from '../../services/news'

jest.mock('../../services/api')

describe('Latest News', () => {
	it('should return 1 latests news', async () => {
		const dataMock = { 
			data: {
				articles : [
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
		}

		api.get.mockResolvedValue(dataMock)

		const result = await loadNews(1)
		expect(result).toHaveLength(1)
		expect(api.get).toHaveBeenCalledTimes(1);
	})
})