describe('User needs to', () => {
    it('Login with invalid creds', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type('tomsmith1');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').click();
        cy.get('#flash').should('contain', 'Your username is invalid!');
        })

    it('Login with valid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    }) 
    
    it('log out', () => {
        cy.get('.button').click();
        cy.get('#flash').should('contain', 'You logged out of the secure area!');   
        }) 
})
