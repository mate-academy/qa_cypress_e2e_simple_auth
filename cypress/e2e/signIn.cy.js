/// <reference types="cypress" />

describe('Login page', () => {
    beforeEach(() => { 
      cy.visit('https://the-internet.herokuapp.com/login') 
    });
  
    const user = {
    userName: "tomsmith",
    password: "SuperSecretPassword!"
    };

    it('should provide credentials for successful login', () => {
      cy.get('[id="username"]')
        .type(user.userName);
      cy.get('[id="password"]')
        .type(user.password);
      cy.get('[class="fa fa-2x fa-sign-in"]')
        .click();
      cy.get('[id="flash"]')
        .should('contain.text', 'You logged into a secure area!');
    });

    it('should provide validation error for login with invalid username', () => {
      cy.get('[id="username"]')
        .type(user.userName + '123');
      cy.get('[id="password"]')
        .type(user.password);
      cy.get('[class="fa fa-2x fa-sign-in"]')
        .click();
      cy.get('[id="flash"]')
        .should('contain.text', 'Your username is invalid!');
    });

    it('should provide validation error for login with invalid password', () => {
      cy.get('[id="username"]')
        .type(user.userName);
      cy.get('[id="password"]')
        .type(user.password + '123');
      cy.get('[class="fa fa-2x fa-sign-in"]')
        .click();
      cy.get('[id="flash"]')
      .should('contain.text', 'Your password is invalid!');
    });

    it('should provide successful logging out', () => {
      cy.get('[id="username"]')
        .type(user.userName);
      cy.get('[id="password"]')
        .type(user.password);
      cy.get('[class="fa fa-2x fa-sign-in"]')
        .click();
      cy.get('[id="flash"]')
        .should('contain.text', 'You logged into a secure area!');
      cy.get('[href="/logout"]')
        .click();
      cy.get('[id="flash"]')
        .should('contain.text', 'You logged out of the secure area!')
    });
  });