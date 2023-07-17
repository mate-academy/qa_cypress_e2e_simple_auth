/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  const invalidUsername = 'tosmit1h';
  const invalidPassword = 'SuperSecretPassword!1';

  beforeEach(() => {
    cy.visit('/login');
    cy.url().should('include', '/login');
  });

  it('should login with valid credits', () => {
    cy.get('#username')
      .click();
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .click();
    cy.get('#password')
      .type(password);

    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should not login with invalid username', () => {
    cy.get('#username')
      .click();
    cy.get('#username')
      .type(invalidUsername);

    cy.get('#password')
      .click();
    cy.get('#password')
      .type(password);

    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();

    cy.get('#flash')
      .should('contain.text', ' Your username is invalid!');
  });


  it('should not login with invalid password', () => {
    cy.get('#username')
      .click();
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .click();
    cy.get('#password')
      .type(invalidPassword);

    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();

    cy.get('#flash')
      .should('contain.text', ' Your password is invalid!');
  });

  it('should logout from the app', () => {
    cy.get('#username')
      .click();
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .click();
    cy.get('#password')
      .type(password);

    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();

    cy.get('[href="/logout"]')
      .click('');

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
