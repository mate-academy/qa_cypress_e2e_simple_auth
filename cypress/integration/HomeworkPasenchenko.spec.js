it('User can sign in with valid data', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')

    cy.get('.fa').click()

    cy.get('#flash').should('contain', 'You logged into a secure area!')
});

it('An error is shown after entering invalid data', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('testtest')
    cy.get('#password').type('SecretPassword!')

    cy.get('.fa').click()

    cy.get('#flash').should('contain', 'Your username is invalid!')
});

it('User can log out after signing in and clicking the [Logout] button', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')

    cy.get('.fa').click()

    cy.get('#flash').should('contain', 'You logged into a secure area!')

    cy.get('.button').click()

    cy.get('#flash').should('contain', 'You logged out of the secure area!')
});
