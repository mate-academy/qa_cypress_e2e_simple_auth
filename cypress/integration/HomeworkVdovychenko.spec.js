/// <reference types="cypress"/>
describe('',() => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  
  it('Successful login', () => {
    cy.get('#username').type(`tomsmith`);
    cy.get('#password').type(`SuperSecretPassword!`);
    cy.get('.radius').click();

    cy.get('.flash.success').contains('You logged into a secure area!').should('exist');
  });

  it('Unsuccessful login', () => {
    cy.get('#username').type(`userinvalid`);
    cy.get('#password').type(`PasswordInvalid!`);
    cy.get('.radius').click();

    cy.get('.flash.error').contains('Your username is invalid!').should('exist');
  });

  it('Successful logout', () => {
    cy.get('#username').type(`tomsmith`);
    cy.get('#password').type(`SuperSecretPassword!`);
    cy.get('.radius').click();

    cy.get('.flash.success').contains('You logged into a secure area!').should('exist');

    cy.get('.button.secondary.radius').click();

    cy.get('.flash.success').contains('You logged out of the secure area!').should('exist');
  });
});
