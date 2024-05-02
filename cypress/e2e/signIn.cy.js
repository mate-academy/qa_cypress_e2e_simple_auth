/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  const userData = {
    username: 'tomsmith',
    password: 'SuperSecretPassword!'
  };

  it('should provide an ability to log in with valid creds', () => {
    cy.get('form[name="login"] input[name="username"]')
      .type(`${userData.username}`);

    cy.get('form[name="login"] input[name="password"]')
      .type(`${userData.password}`);

    cy.get('form[name="login"] > button[type="submit"]')
      .should('contain', ' Login').click();

    cy.get('div[id="flash"]')
      .should('contains.text', 'You logged into a secure area!');
  });

  it('shouldn\'t provide an ability to log in with invalid creds', () => {
    cy.get('form[name="login"] input[name="username"]').type('invalid');

    cy.get('form[name="login"] input[name="password"]')
      .type('invalid');

    cy.get('form[name="login"] > button[type="submit"]')
      .should('contain', ' Login').click();

    cy.get('div[id="flash"]')
      .should('contains.text', 'Your username is invalid!');
  });

  it('should provide an ability to log out from the app', () => {
    cy.get('form[name="login"] input[name="username"]')
      .type(`${userData.username}`);

    cy.get('form[name="login"] input[name="password"]')
      .type(`${userData.password}`);

    cy.get('form[name="login"] > button[type="submit"]')
      .should('contain', ' Login').click();

    cy.get('div[id="flash"]')
      .should('contains.text', 'You logged into a secure area!');

    cy.get('a[href="/logout"]').click();

    cy.get('div[id="flash"]')
      .should('contains.text', 'You logged out of the secure area!');
  });
});
