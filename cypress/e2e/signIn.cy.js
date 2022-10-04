/// <reference types="cypress" />
describe('Heroku Sign in Page', () => {
  beforeEach(() =>{
    cy.visit ('https://the-internet.herokuapp.com/login');
  });

  const userData = {
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
  };

  it('Successful Sign in with valid credentials', () => {
    cy.get('[id="username"]')
      .type(`${userData.username}`);
    cy.get('[id="password"]')
      .type(`${userData.password}`);
    cy.get('.radius')
      .click();
    cy.get('[id="flash"]')
      .should('contains.text', 'You logged into a secure area!');
   });

  it('Sign in with invalid username', () => {
    cy.get('[id="username"]')
      .type(`${userData.username}` + '1');
    cy.get('[id="password"]')
      .type(`${userData.password}`);
    cy.get('.radius')
      .click();
    cy.get('[id="flash"]')
      .should('contains.text', 'Your username is invalid!');
  });

  it('Sign in with invalid password', () => {
    cy.get('[id="username"]')
      .type(`${userData.username}`);
    cy.get('[id="password"]')
      .type(`${userData.password}` + '123');
    cy.get('.radius')
      .click();
    cy.get('[id="flash"]')
      .should('contains.text', 'Your password is invalid!');
  });

  it('Successful logout', () => {
    cy.get('[id="username"]')
      .type(`${userData.username}`);
    cy.get('[id="password"]')
      .type(`${userData.password}`);
    cy.get('.radius')
      .click();
    cy.get('[id="flash"]')
      .should('contains.text', 'You logged into a secure area!');
      cy.get('.button')
      .click();
      cy.get('[id="flash"]')
      .should('contains.text', 'You logged out of the secure area!');
  });

});
