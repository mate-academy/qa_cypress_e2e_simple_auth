/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.url().should('include', '/login');
  });

  it('should allow to log in a user', () => {
    cy.get(`#username`).type(`tomsmith`);
    cy.get(`#password`).type(`SuperSecretPassword!` + `{enter}`);
    cy.get(`h2`).should(`contain.text`, ` Secure Area`);
    cy.get(`h4`).should(`contain.text`, `Welcome to the Secure Area. When you are done click logout below.`);
    cy.get(`i.icon-2x.icon-signout`).should(`be.visible`);
  });

  it('should not allow to log in with invalid Username', () => {
    cy.get(`#username`).type(`invalid`);
    cy.get(`#password`).type(`SuperSecretPassword!` + `{enter}`);
    cy.get(`#flash`).should(`contain.text`, `Your username is invalid!`);
    cy.get(`h2`).should(`contain.text`, `Login Page`);
  });

  it('should not allow to log in with invalid Password', () => {
    cy.get(`#username`).type(`tomsmith`);
    cy.get(`#password`).type(`invalidPassword1!` + `{enter}`);
    cy.get(`#flash`).should(`contain.text`, `Your password is invalid!`);
    cy.get(`h2`).should(`contain.text`, `Login Page`);
  });

  it('should allow to log out a user', () => {
    cy.get(`#username`).type(`tomsmith`);
    cy.get(`#password`).type(`SuperSecretPassword!` + `{enter}`);
    cy.get(`h2`).should(`contain.text`, ` Secure Area`);
    cy.get(`h4`).should(`contain.text`, `Welcome to the Secure Area. When you are done click logout below.`);
    cy.get(`i.icon-2x.icon-signout`).should(`be.visible`);
    cy.get(`a.button.secondary.radius`).click();
    cy.get(`#flash`).should(`contain.text`, `You logged out of the secure area!`);
  });
});
