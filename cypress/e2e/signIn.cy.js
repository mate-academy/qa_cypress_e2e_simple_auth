/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const randomNumber = Math.random().toString().slice(2);
  const newUsername = `tomsmith_${randomNumber}`;
  const newPasswoword = `SuperSecretPassword!_${randomNumber}`;

  it('should login user with valid data', () => {
    cy.get('[name = "username"]').type(username);
    cy.get('[name = "password"]').type(password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.get('.button').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });

  it('should not login user with invalid Username', () => {
    cy.get('[name = "username"]').type(newUsername);
    cy.get('[name = "password"]').type(password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should not login user with invalid Password', () => {
    cy.get('[name = "username"]').type(username);
    cy.get('[name = "password"]').type(newPasswoword);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your password is invalid!');
  });

  it('should loggout from the app', () => {
    cy.get('[name = "username"]').type(username);
    cy.get('[name = "password"]').type(password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.get('.button').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
