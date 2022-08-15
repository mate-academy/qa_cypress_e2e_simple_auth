/// <reference types="cypress" />

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  const userName = 'tomsmith';
  const passWord = 'SuperSecretPassword!';

  it('Login with valid creds', () =>{
    cy.get('#username').type(userName);

    cy.get('#password').type(passWord);

    cy.get('.fa').click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('Login with invalid creds and check validation error.', () =>{
    cy.get('#username').type(`false${userName}`);

    cy.get('#password').type(`false${passWord}`);

    cy.get('.fa').click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');

  });

  it('Logout from the app and assert you successfully logged out.', () =>{
    cy.get('#username').type(userName);

    cy.get('#password').type(passWord);

    cy.get('.fa').click();

    cy.get('.button').click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});