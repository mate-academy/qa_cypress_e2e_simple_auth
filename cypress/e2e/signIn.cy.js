/// <reference types="cypress" />

describe('Sign In page', () => {
  const userName = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const fakeUserName = 'fakeUser';
  const fakePassword = 'fakePassword';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide the ability to sign in with the valid creds', () => {
    cy.get('#username')
      .type(userName);
    cy.get('#password')
      .type(password);
    cy.get('i.fa.fa-2x.fa-sign-in')
      .click();
    cy.get('#flash.flash.success')
      .should('contain', 'You logged into a secure area!');
  });

  it('should reject the ability to sign in with the invalid Username', () => {
    cy.get('#username')
      .type(fakeUserName);
    cy.get('#password')
      .type(password);
    cy.get('i.fa.fa-2x.fa-sign-in')
      .click();
    cy.get('#flash.flash.error')
      .should('contain', 'Your username is invalid!');
  });

  it('should reject the ability to sign in with the invalid Password', () => {
    cy.get('#username')
      .type(userName);
    cy.get('#password')
      .type(fakePassword);
    cy.get('i.fa.fa-2x.fa-sign-in')
      .click();
    cy.get('#flash.flash.error')
      .should('contain', 'Your password is invalid!');
  });

  it('should provide to logout from the app:', () => {
    cy.get('#username')
      .type(userName);
    cy.get('#password')
      .type(password);
    cy.get('i.fa.fa-2x.fa-sign-in')
      .click();
    cy.get('#flash.flash.success')
      .should('contain', 'You logged into a secure area!');
    cy.get('i.icon-2x.icon-signout')
      .click();
    cy.get('#flash.flash.success')
      .should('contain', 'You logged out of the secure area!');
  });
});
