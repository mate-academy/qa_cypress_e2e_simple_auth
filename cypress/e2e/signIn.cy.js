/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login wih valid credentials', () => {
    cy.get('input#username')
      .type(`tomsmith`);
    cy.get('input#password')
      .type(`SuperSecretPassword!`);
    cy.get('i.fa-sign-in')
      .click();
    cy.get('div#flash.flash.success')
      .should('contain', 'You logged into a secure area!');
  });

  it('Login with invalid username', () => {
    cy.get('input#username')
      .type(`badusername`);
    cy.get('input#password')
      .type(`SuperSecretPassword!`);
    cy.get('i.fa-sign-in')
      .click();
    cy.get('div#flash.flash.error')
      .should('contain', 'Your username is invalid!');
  });

  it('Login with invalid password', () => {
    cy.get('input#username')
      .type(`tomsmith`);
    cy.get('input#password')
      .type(`thisisinvalidpassword`);
    cy.get('i.fa-sign-in')
      .click();
    cy.get('div#flash.flash.error')
      .should('contain', 'Your password is invalid!');
  });

  it('Logout from the app', () => {
    cy.get('input#username')
      .type(`tomsmith`);
    cy.get('input#password')
      .type(`SuperSecretPassword!`);
    cy.get('i.fa-sign-in')
      .click();
    cy.get('a.button.secondary.radius')
      .click();
    cy.get('div#flash.flash.success')
      .should('contain', 'You logged out of the secure area!');
  });
});
