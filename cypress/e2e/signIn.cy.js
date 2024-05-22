/// <reference types="cypress" />

describe('Task simple Authorization', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const invalidUsername = 'tomssmmith';
  const invalidPassword = 'SuperCecretPassword!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('user unsuccessfully logged in - wrong username', () => {
    cy.url()
      .should('include', '/login');
    cy.get('#username')
      .type(invalidUsername);
    cy.get('#password')
      .type(password);
    cy.get('[type="submit"]')
      .should('exist')
      .click();
    cy.get('#flash-messages')
      .should('contain.text', 'Your username is invalid!');
  });

  it('user unsuccessfully logged in - wrong password', () => {
    cy.get('h2')
      .contains('Login Page');
    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(invalidPassword);
    cy.get('[type="submit"]')
      .should('be.visible')
      .click();
    cy.get('#flash-messages')
      .should('contain.text', 'Your password is invalid!');
  });

  it('user "tomsmith" successfully logged in', () => {
    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(password);
    cy.get('[type="submit"]')
      .click();
    cy.url()
      .should('contains', '/secure');
    cy.get('h2')
      .contains('Secure Area');
    cy.get('#flash-messages')
      .should('contain.text', 'You logged into a secure area!');
  });
  // Logout from the app
  it('user "tomsmith" successfully logout from app', () => {
    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(password);
    cy.get('[type="submit"]')
      .click();
    cy.url()
      .should('contains', '/secure');
    cy.get('h2')
      .contains('Secure Area');
    cy.get('.icon-2x')
      .click();
    cy.url('/login')
      .should('exist');
    cy.get('#flash')
      .should('exist');
    cy.get('#flash-messages')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
