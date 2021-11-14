describe('Visit a page', () => {
	it('Load a URL', () => {
		cy.visit('http://example.com')
	})

	it('should check correct URL', () => {
		cy.url().should('include', 'example.com')
	})

	it('should wait three seconds', () => {
		cy.wait(3000)
	})

	it('should pause', () => {
		cy.pause()
	})

	it('should check for correct element on the page', () => {
		cy.get('h1').should('be.visible')
	})
})
