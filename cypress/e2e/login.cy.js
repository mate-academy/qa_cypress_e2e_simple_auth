/// <reference types="cypress" />

describe('Login page', () => {

  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  
  beforeEach(() => {
    cy.visit('/login');
    cy.url()
      .should('include', '/login');
    cy.get('h2')
      .should('contain.text','Login Page')
  });

  it('should provide an ability to log in with valid data', () => {

    cy.get('#username')
      .type(username);
    
    cy.get('#password')
      .type(password);

    cy.get('.fa')
      .click();

    cy.url('/secure');

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should display a validation error for logging in with invalid username', () => {

    cy.get('#username')
      .type(username + '@');
    
    cy.get('#password')
      .type(password);

    cy.get('.fa')
      .click();

    cy.get('#flash.error')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should display a validation error for logging in with invalid password', () => {

    cy.get('#username')
      .type(username);
    
    cy.get('#password')
      .type(password + '12');

    cy.get('.fa')
      .click();

    cy.get('#flash.error')
      .should('contain.text', 'Your password is invalid!');
  });

  it('should provide an ability to log out from the app successfully', () => {

    cy.get('#username')
    .type(username);
  
    cy.get('#password')
      .type(password);

    cy.get('.fa')
      .click();

    cy.url('/secure');

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
      
    cy.get('.icon-signout')
      .click();

    cy.url('/login');

    cy.get('#flash')
      .should('contain.text', ' You logged out of the secure area!');
  });
});
