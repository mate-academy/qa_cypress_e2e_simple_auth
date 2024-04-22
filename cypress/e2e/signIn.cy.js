/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit(`https://the-internet.herokuapp.com/login`);
  });

  it('should allow to login with valid credentials', () => {
    const username = 'tomsmith';
    const passwd = 'SuperSecretPassword!';

    cy.url().should(`include`, 'login');
    cy.get('[id = "username"').type(username);
    cy.get('[id = "password"').type(passwd);
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should allow to log out from the app', () => {
    const username = 'tomsmith';
    const passwd = 'SuperSecretPassword!';

    cy.url().should(`include`, 'login');
    cy.get('[id = "username"').type(username);
    cy.get('[id = "password"').type(passwd);
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    cy.get('.button').click();
    cy.get('#flash').contains('You logged out of the secure area!');
  });

  it('should not allow to login with invalid username', () => {
    const username = 'dtworek';
    const passwd = 'SuperSecretPassword!';

    cy.url().should(`include`, 'login');
    cy.url().should(`include`, 'login');
    cy.get('[id = "username"').type(username);
    cy.get('[id = "password"').type(passwd);
    cy.get('button').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should not allow to login with invalid password', () => {
    const username = 'tomsmith';
    const passwd = 'Dominik!234';

    cy.url().should(`include`, 'login');
    cy.url().should(`include`, 'login');
    cy.get('[id = "username"').type(username);
    cy.get('[id = "password"').type(passwd);
    cy.get('button').click();
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });
});
