/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'invalid_username';
  const invalidPassword = 'InvalidPassword!';
  it('should provide an ability to log in with valid credentials', () => {
    cy.get('[id="username"]')
      .type(validUsername);
    cy.get('[id="password"]')
      .type(validPassword);
    cy.get('[type="submit"]')
      .click();
    cy.get('[class="flash success"]')
      .should('contain.text', 'You logged into a secure area!');
  });
  it('should restrict an ability to login with invalid username', () => {
    cy.get('[id="username"]')
      .type(invalidUsername);
    cy.get('[id="password"]')
      .type(validPassword);
    cy.get('[type="submit"]')
      .click();
    cy.get('[class="flash error"]')
      .should('contain.text', 'Your username is invalid!');
  });
  it('should restrict an ability to login with invalid password', () => {
    cy.get('[id="username"]')
      .type(validUsername);
    cy.get('[id="password"]')
      .type(invalidPassword);
    cy.get('[type="submit"]')
      .click();
    cy.get('[class="flash error"]')
      .should('contain.text', 'Your password is invalid!');
  });
  it('should provide an ability to log out', () => {
    cy.get('[id="username"]')
      .type(validUsername);
    cy.get('[id="password"]')
      .type(validPassword);
    cy.get('[type="submit"]')
      .click();
    cy.get('[href="/logout"]')
      .click();
    cy.get('[class="flash success"]')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
