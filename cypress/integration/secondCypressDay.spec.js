describe('Cypress Sign up', () => {

    it('should goes into "Login Page" and login', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username')
    .type('tomsmith');

    cy.get('#password')
    .type('SuperSecretPassword!');

    cy.get('.fa.fa-2x.fa-sign-in')
    .click();

    cy.get('.subheader')
    .contains('Welcome to the Secure Area. When you are done click logout below.')
    .should('exist');

    cy.get('.flash.success')
    .contains('You logged into a secure area!')
    .should('exist');

    cy.get('.button.secondary.radius')
    .click();

    cy.get('div h2')
    .contains('Login Page')
    .should('exist');
    });
    });