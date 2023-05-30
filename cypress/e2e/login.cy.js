/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    
  });

  it('Login in with valid creds', () => {
    cy.contains('Login Page');
    cy.contains('This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.');
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa-sign-in')
      .click();

    cy.get('#flash')
      .should('contain', ' You logged into a secure area!')
  });

  it('Login with invalid creds', () => {
    cy.contains('Login Page');
    cy.contains('This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.');
    cy.get('#username')
      .type('tomsmith4');
    cy.get('#password')
      .type('SuperSecretPassword!4');
    cy.get('.fa-sign-in')
      .click();

    cy.get('#flash')
      .should('contain', 'Your username is invalid!')

  })

  it('Loguot from the app', () => {
    cy.contains('Login Page');
    cy.contains('This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.');
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa-sign-in')
      .click();
    cy.get('.icon-signout')
      .click()
    cy.get('#flash')
      .should('contain', ' You logged out of the secure area!');

  })
});
