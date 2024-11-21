/// <reference types="cypress" />

describe('Sign In page', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'invalid Username';
  const invalidPassword = 'invalid Password';
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide the ability to sign in', () => {
    cy.get('[id="username"]').type(validUsername);

    cy.get('[id="password"]').type(validPassword);

    cy.get('[type="submit"]').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });
  it('should provide the ability to successful logout ', () => {
    cy.get('[id="username"]').type(validUsername);

    cy.get('[id="password"]').type(validPassword);

    cy.get('[type="submit"]').click();

    cy.get('[class="icon-2x icon-signout"]').click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });

  it('should not provide the ability to sign in with invalid username', () => {
    cy.get('[id="username"]').type(invalidUsername);

    cy.get('[id="password"]').type(validPassword);

    cy.get('[type="submit"]').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should not provide the ability to sign in with invalid password', () => {
    cy.get('[id="username"]').type(validUsername);

    cy.get('[id="password"]').type(invalidPassword);

    cy.get('[type="submit"]').click();

    cy.get('#flash').should('contain', 'Your password is invalid!');
  });
});
