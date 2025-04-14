/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  it('should login user with valid credits', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);

    cy.get('.radius').click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should logout user', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);

    cy.get('.radius').click();

    cy.get('.button').click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });

  it('should not login with invalid username', () => {
    cy.get('#username').type(`${username}123`);
    cy.get('#password').type(password);

    cy.get('.radius').click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should not login with invalid password', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(`${password}123`);

    cy.get('.radius').click();

    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });
});
