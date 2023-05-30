/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit({url:'https://the-internet.herokuapp.com/login', method:'GET'})
  });

  it('Login with valid creds and assert you successful logged in', () => {
    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius').contains('Login')
      .click();

    cy.get('h2')
      .should('contain', 'Secure Area');

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
      
  });

  it('Log in with invalid username', () => {

    cy.get('#username')
      .type('Invalidtomsmith')

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius').contains('Login')
      .click();
    
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
    
});

it('Log in with invalid password', () => {

  cy.get('#username')
    .type('tomsmith')

  cy.get('#password')
    .type('InvalidSuperSecretPassword!');

  cy.get('.radius').contains('Login')
    .click();
  
  cy.get('#flash')
    .should('contain', 'Your password is invalid!');
});

it('Logout from account with asser about successful logout', () => {

  cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius').contains('Login')
      .click();

    cy.get('h2')
      .should('contain', 'Secure Area')

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');

    cy.contains('.button', 'Logout')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
});
});
