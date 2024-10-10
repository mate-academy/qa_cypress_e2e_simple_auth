/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const invalidUsername = 't0msmith';
  const invalidPassword = 'SuperSecretPassword';

  const successLoginMessage = 'You logged into a secure area!';
  const invUsernameMessage = 'Your username is invalid!';
  const invPassMessage = 'Your password is invalid!';
  const successLogoutMessage = 'You logged out of the secure area!';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('Should login with valid creds', () => {
    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(password);

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain', successLoginMessage);
  });

  it('Shouldn\'t login with invalid username', () => {
    cy.get('#username')
      .type(invalidUsername);
    cy.get('#password')
      .type(password);

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain', invUsernameMessage);
  });

  it('Shouldn\'t login with invalid password', () => {
    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(invalidPassword);

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain', invPassMessage);
  });

  it('Should logout from the app', () => {
    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(password);

    cy.get('.radius')
      .click();

    cy.get('a[href="/logout"]')
      .click();

    cy.get('#flash')
      .should('contain', successLogoutMessage);
  });
});
