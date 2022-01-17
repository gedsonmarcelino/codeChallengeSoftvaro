import { formatDate } from "../../utils/format";

describe('Format - formatDate', () => {
	it('should return 01/01/2010 10:00.', () => {
		const testParam = new Date('2010-01-01 10:00:00')
		const result = formatDate(testParam)
		expect(result).toEqual('01/01/2010 10:00')
	});
});