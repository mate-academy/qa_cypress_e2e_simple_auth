/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  it('should provide the ability to login', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.get('[type="submit"]')
      .click();

    cy.get('[href="/logout"]')
      .should('contain.text', 'Logout');
  });

  it('should prevent login with invalid username', () => {
    const wrongUsername = 'Jsjkjk!fjkfhfj7233fggfgfsd';
    const validationMessage = 'Your username is invalid!';

    cy.get('#username')
      .type(wrongUsername);

    cy.get('#password')
      .type(password);

    cy.get('[type="submit"]')
      .click();

    cy.get('#flash')
      .should('contain.text', validationMessage);
  });

  it('should prevent login with invalid password', () => {
    const wrongPassword = 'q232rfsfefds';
    const validationMessage = 'Your password is invalid!';

    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(wrongPassword);

    cy.get('[type="submit"]')
      .click();

    cy.get('#flash')
      .should('contain.text', validationMessage);
  });

  it('should provide the ability to logout', () => {
    const validationMessage = 'You logged out of the secure area!';

    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.get('[type="submit"]')
      .click();

    cy.get('[href="/logout"]')
      .click();

    cy.get('#flash')
      .should('contain.text', validationMessage);
  });
});
