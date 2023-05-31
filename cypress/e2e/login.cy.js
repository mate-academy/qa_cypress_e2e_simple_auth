/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
    
  });

  const Username = 'tomsmith';
  const Password = 'SuperSecretPassword!';
  const fakeUsername = 'tomash';
  const fakePassword = 'Qw12345678';

  it('The user is not able to Sign In with invalid Username', () => {
  
    
      cy.get('#username')
        .type(fakeUsername);
      cy.get('#password')
        .type(Password);
      cy.get('.fa')
        .click();
      cy.get('#flash')
        .should('contain', 'Your username is invalid!');
  });

  it('The user is not able to Sign In with invalid Password', () => {
  
    
    cy.get('#username')
      .type(Username);
    cy.get('#password')
      .type(fakePassword);
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
});

  it('The user is able to Sign In with valid data', () => {
    
      cy.get('#username')
        .type(Username)  ;
      cy.get('#password')
        .type(Password);
      cy.get('.fa')
        .click();
      cy.get('#flash')
        .should('contain', 'You logged into a secure area!');
  });

  it('The user is able to Log Out', () => {

      cy.get('#username')
        .type(Username)  ;
      cy.get('#password')
        .type(Password);
      cy.get('.fa')
        .click();
      cy.get('#flash')
        .should('contain', 'You logged into a secure area!');
      cy.get('a[href="/logout"]')
        .click();
      cy.get('#flash')
        .should('contain', ' You logged out of the secure area!');
  });
});