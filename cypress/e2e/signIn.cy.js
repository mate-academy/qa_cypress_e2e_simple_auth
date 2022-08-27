/// <reference types="cypress" />

describe('login page', () => {
 
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
 
  beforeEach(() => {
 
    cy.visit('/login');
 
  });
 
  it('should login registered user with valid data', () => {
   
    cy.loginUser(username, password);
   
    cy.get('[class="flash success"]')
      .should('contain', 'You logged into a secure area!');
 
  });
 
  it('should not login user with invalid username', () => {
 
    cy.get('[name="username"]')
      .type('tomsmith1');
 
    cy.get('[name="password"]')
      .type(password);
 
    cy.get('button')
      .contains('Login')
      .click();
   
    cy.get('[class="flash error"]')
      .should('contain', 'Your username is invalid!');
 
  });
 
  it('should not login user with invalid password', () => {
 
    cy.get('[name="username"]')
      .type(username);
 
    cy.get('[name="password"]')
      .type('SuperSecret');
 
    cy.get('button')
      .contains('Login')
      .click();
   
    cy.get('[class="flash error"]')
      .should('contain', 'Your password is invalid!');
 
  });
 
  it('should logout user from the app', () => {
 
    cy.loginUser(username, password);
 
    cy.get('[class="flash success"]')
      .should('contain', 'You logged into a secure area!');
 
    cy.get('[class="button secondary radius"]')
      .click();
     
    cy.get('#flash-messages')
      .should('contain', 'You logged out of the secure area!');
 
  });
});
 