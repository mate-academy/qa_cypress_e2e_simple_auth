/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';

describe('First test', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login user with valid data', () => {

    cy.login(username, password);

    cy.contains('You logged into a secure area!')
      .should('be.visible');

  });

  it('should not login with invalid data', () => {  

    cy.get('[name="username"]')
      .type ('tom');

    cy.get('[name="password"]')
      .type ('SuperSecretPassword');

    cy.contains('button', 'Login' )
      .click();

    cy.contains('Your username is invalid!')
    .should('be.visible');

  });

  it('should logout', () => { 
   
    cy.login(username, password);

    cy.contains('Logout')
      .click();
    
    cy.contains('You logged out of the secure area!')
      .should('be.visible');

  });
});
  