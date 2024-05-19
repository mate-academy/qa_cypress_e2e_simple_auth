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
    cy.get('[id="username"]').type(`${userData.username}`);

    cy.get('[id="password"]').type(`${userData.password}`);

    cy.get('form[name="login"] > button[type="submit"]')
      .should('contain', ' Login').click();

    cy.get('[id="flash"]')
      .should('contains.text', 'You logged into a secure area!');
  });

  it('shouldn\'t provide an ability to log in with invalid creds', () => {
    cy.get('[id="username"]').type('invalid');

    cy.get('[id="password"]').type('invalid');

    cy.get('form[name="login"] > button[type="submit"]')
      .should('contain', ' Login').click();

    cy.get('[id="flash"]').should('contains.text', 'Your username is invalid!');
  });

  it('should provide an ability to log out from the app', () => {
    cy.get('[id="username"]').type(`${userData.username}`);

    cy.get('[id="password"]').type(`${userData.password}`);

    cy.get('form[name="login"] > button[type="submit"]')
      .should('contain', ' Login').click();

    cy.get('[id="flash"]')
      .should('contains.text', 'You logged into a secure area!');

    cy.get('a[href="/logout"]').click();

    cy.get('[id="flash"]')
      .should('contains.text', 'You logged out of the secure area!');
  });
});
