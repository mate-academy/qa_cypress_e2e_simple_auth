/// <reference types="cypress" />
const username = 'tomsmith';
const password = 'SuperSecretPassword!';
describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
 
  it('should login with valid creds', () => {
    cy.get('[name="username"]')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should fail login with invalid username', () => {
    cy.get('#username')
      .type(`invalid${username}`);

    cy.get('#password')
      .type(password);

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('should fail login with invalid password', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(`invalid${password}`);

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
  });

  it('should logout', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.contains('.fa', 'Login')
      .click();

    cy.contains('.button', 'Logout')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
