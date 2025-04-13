/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  it('Should provide ability to login', () => {
    cy.get('[id="username"]')
      .type(username);
    cy.get('[id="password"]')
      .type(password);
    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();
    cy.get('[class="flash success"]')
      .should('contain', 'You logged into a secure area!');
    cy.url()
      .should('contain', '/secure');
  });

  it('Should not provide ability to login with incorrect credentials', () => {
    cy.get('[id="username"]')
      .type('invalid Username');
    cy.get('[id="password"]')
      .type('invalid Password');
    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();
    cy.get('[class="flash error"]')
      .should('contain', 'Your username is invalid!');
    cy.url()
      .should('contain', '/login');
  });

  it('Should not provide ability to login with incorrect password', () => {
    cy.get('[id="username"]')
      .type(username);
    cy.get('[id="password"]')
      .type('invalid Password');
    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();
    cy.get('[class="flash error"]')
      .should('contain', 'Your password is invalid!');
    cy.url()
      .should('contain', '/login');
  });

  it('Should provide ability to logout after successful login', () => {
    cy.get('[id="username"]')
      .type(username);
    cy.get('[id="password"]')
      .type(password);
    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();
    cy.get('[class="flash success"]')
      .should('contain', 'You logged into a secure area!');
    cy.url()
      .should('contain', '/secure');
    cy.get('[href="/logout"]')
      .click();
    cy.url()
      .should('contain', '/login');
  });
});
