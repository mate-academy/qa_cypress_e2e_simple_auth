/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const invUsername = 'tomsmith1';
  const invPassword = 'SuperSecretPassword!1';

  it('should provide an ability to log in', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.get('#login > button > i').click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should show an error message when entering invalid Username', () => {
    cy.get('#username')
      .type(invUsername);

    cy.get('#password')
      .type(password);

    cy.get('#login > button > i').click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should show an error message when entering invalid Password', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(invPassword);

    cy.get('#login > button > i').click();

    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });

  it('should provide an ability to log out', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.get('#login > button > i').click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

    cy.get('#content > div > a > i').click();

    cy.url().should('include', '/login');

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
