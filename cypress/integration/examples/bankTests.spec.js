describe('Bank tests', () => {
	beforeEach('Load the website', () => {
		cy.visit('http://zero.webappsecurity.com/')
		cy.url().should('contain', 'zero.webappsecurity.com')
	})

	it('Login', () => {
		cy.get('#signin_button').click()
		cy.get('#user_login').type('SomeLogin')
		cy.get('#user_password').type('SomePassword')
		cy.get('input').contains('Sign in').click()
		cy.get('.alert-error')
			.should('be.visible')
			.should('contain', 'Login and/or password are wrong.')
	})
})
