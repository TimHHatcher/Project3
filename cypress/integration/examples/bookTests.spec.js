describe('Tests for books website', () => {
	beforeEach('Load the website', () => {
		cy.visit('https://books.toscrape.com/')
		cy.url().should('contain', 'books.toscrape.com')
	})

	it('Travel category book count', () => {
		cy.get('a').contains('Travel').click()
		cy.get('h1').should('contain', 'Travel')
		cy.get('.product_pod').its('length').should('eq', 11)
	})

	it('Check Olio book prices', () => {
		cy.get('a').contains('Poetry').click()
		cy.get('[alt="Olio"]').click()
		cy.get('.price_color').should('contain', '£23.88')
	})
})
