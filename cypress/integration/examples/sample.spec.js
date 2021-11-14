describe('My first test with Cypress', () => {
	it('True should be true', () => {
		expect(true).to.equal(true)
	})

	it('5 should be 5', () => {
		expect(5).to.equal(5)
	})
})

describe('False should be false', () => {
	it('It is really false?', () => {
		expect(false).to.equal(false)
	})
})
