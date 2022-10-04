/// <reference types="cypress" />

describe('Automate the next test case', () => {
    const url = 'https://the-internet.herokuapp.com/login';
    const user = {
    userName: "tomsmith",
    password: "SuperSecretPassword!"
    };

    it('Login with valid creds and assert you successfully logged in.', () => {
      cy.visit(url);
      cy.get('#username')
        .type(user.userName);
      cy.get('#password')
        .type(user.password);
      cy.get('.fa')
        .click();
      cy.get('#flash')
        .should('contain.text', 'You logged into a secure area!');
    });

    it('Login with invalid username and check validation error.', () => {
      cy.visit(url);
      cy.get('#username')
        .type(user.userName + '123');
      cy.get('#password')
        .type(user.password);
      cy.get('.fa')
        .click();
      cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
    });

    it('Login with invalid password and check validation error.', () => {
      cy.visit(url);
      cy.get('#username')
        .type(user.userName);
      cy.get('#password')
        .type(user.password + '123');
      cy.get('.fa')
        .click();
      cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
    });

    it('Logout from the app and assert you successfully logged out.', () => {
      cy.visit(url);
      cy.get('#username')
        .type(user.userName);
      cy.get('#password')
        .type(user.password);
      cy.get('.fa')
        .click();
      cy.get('#flash')
        .should('contain.text', 'You logged into a secure area!');
      cy.get('.button')
        .click();
      cy.get('#flash')
        .should('contain.text', 'You logged out of the secure area!')
    });
  });