/// <reference types='cypress' />
const username = 'tomsmith';
const password = 'SuperSecretPassword!';
describe('Secure area page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  it('should to logout from Secure area', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.radius').click();
    cy.get('.button.secondary.radius').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
