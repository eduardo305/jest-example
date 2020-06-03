import sum from './sum';

describe('sum', () => {
	it('should sum 2 numbers', () => {
		const result = sum(2, 3);

		expect(result).toBe(5);
	});
});
