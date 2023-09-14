/// <reference types="cypress" />

describe('Sign In page', () => {
  const validUsername = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const invalidUsername = 'invalidone';
  const invalidPassword = 'invalidpassword';
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
    
  });

  it('Should allow successful login', () => {

    cy.get('[id="username"]').type(validUsername);

    cy.get('[id="password"]').type(password);

    cy.get('[type="submit"]').click();

    cy.get('[id="flash"]').should('contain', 'You logged into a secure area!');

  });

  it('Should show validation message for invalid username', () => {

    cy.get('[id="username"]').type(invalidUsername);

    cy.get('[id="password"]').type(password);

    cy.get('[type="submit"]').click();

    cy.get('[id="flash"]').should('contain', 'Your username is invalid!');

  });

  it('Should show validation message for invalid password', () => {

    cy.get('[id="username"]').type(validUsername);

    cy.get('[id="password"]').type(invalidPassword);

    cy.get('[type="submit"]').click();

    cy.get('[id="flash"]').should('contain', 'Your password is invalid!');

  });

  it('Should allow successful logout', () => {

    cy.get('[id="username"]').type(validUsername);

    cy.get('[id="password"]').type(password);

    cy.get('[type="submit"]').click();

    cy.get('[href="/logout"]').click();

    cy.get('[id="flash"]').should('contain', 'You logged out of the secure area!');

  }); 
});
