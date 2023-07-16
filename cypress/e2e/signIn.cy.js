/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in with registered credentials', () => {
    const userName = 'tomsmith';
    const userPassword = 'SuperSecretPassword!';

    cy.get('[id="username"]')
      .type(userName);

    cy.get('[id="password"]')
      .type(userPassword);

    cy.contains('button', 'Login')
      .click();

    cy.get('#flash.success')
      .should('exist');

    cy.get('[class="icon-lock"]')
      .should('exist');

    cy.get('[href="/logout"]')
      .should('exist');
  });

  it('should provide error after try to login with wrong username', () => {
    const userName = 'samsmith';
    const userPassword = 'SuperSecretPassword!';

    cy.get('[id="username"]')
      .type(userName);

    cy.get('[id="password"]')
      .type(userPassword);

    cy.contains('button', 'Login')
      .click();

    cy.get('#flash.error')
      .should('exist');

    cy.get('[id="flash"]')
      .contains('Your username is invalid!');

    cy.get('[id="username"]')
      .should('exist');

    cy.get('[id="password"]')
      .should('exist');

    cy.contains('button', 'Login')
      .should('exist');
  });

  it('should provide error after try to login with wrong password', () => {
    const userName = 'tomsmith';
    const userPassword = 'SuperWeakPassword!';

    cy.get('[id="username"]')
      .type(userName);

    cy.get('[id="password"]')
      .type(userPassword);

    cy.contains('button', 'Login')
      .click();

    cy.get('#flash.error')
      .should('exist');

    cy.get('[id="flash"]')
      .contains('Your password is invalid!');

    cy.get('[id="username"]')
      .should('exist');

    cy.get('[id="password"]')
      .should('exist');

    cy.contains('button', 'Login')
      .should('exist');
  });

  it('should provide an ability to log out when user is logged in', () => {
    const userName = 'tomsmith';
    const userPassword = 'SuperSecretPassword!';

    cy.get('[id="username"]')
      .type(userName);

    cy.get('[id="password"]')
      .type(userPassword);

    cy.contains('button', 'Login')
      .click();

    cy.get('[href="/logout"]')
      .click();

    cy.get('#flash.success')
      .should('exist');

    cy.get('[id="flash"]')
      .contains('You logged out of the secure area!');
  });
});
