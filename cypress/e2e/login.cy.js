/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    
  });

  it('should provide an ability to login with valid creds', () => {
    cy.get('[name="username"]')
      .type('tomsmith');
    
    cy.get ('[name="password"]')
      .type('SuperSecretPassword!');

    cy.contains('.fa','Login')
    .click();

    cy.get('#flash')
    .should('contain', 'You logged into a secure area!');
});
  
  it('should not allow to login with invalid creds', () => {
    cy.get('[name="username"]')
      .type('invalidUsername');
    
    cy.get ('[name="password"]')
      .type('invalidPassword');

    cy.contains('.fa','Login')
    .click();

    cy.get('#flash')
    .should('contain', 'Your username is invalid!');

});

  it('should provide an ability to logout', () => {
  
    cy.get('[name="username"]')
    .type('tomsmith');
  
    cy.get ('[name="password"]')
    .type('SuperSecretPassword!');
    
    cy.contains('.fa','Login')
    .click();
   
    cy.get('#flash')
    .should('contain', 'You logged into a secure area!')

    cy.contains('.button','Logout')
  .click();

    cy.get('#flash')
  .should('contain', 'You logged out of the secure area!');

  });
});



