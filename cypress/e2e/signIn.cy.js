/// <reference types="cypress" />

describe('Sign In page', () => {
  const password = 'SuperSecretPassword!';
  const username = 'tomsmith';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should provide an ability to log in with valid creds', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);

    cy.contains('button', 'Login').click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('Should not allow login with invalid credentials', () => {
    const usernameFalse = 'TestSuper';
    const passwordFalse = 'Super';

    cy.get('#username').type(username);
    cy.get('#password').type(passwordFalse);

    cy.contains('button', 'Login').click();

    cy.get('#flash')
      .should('contain', 'Your password is invalid!');

    cy.get('#username').type(usernameFalse);
    cy.get('#password').type(password);

    cy.contains('button', 'Login').click();

    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });
  it('Should provide an ability to log out from the site', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);

    cy.contains('button', 'Login').click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');

    cy.contains('.button', 'Logout').click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
