/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login')
  });

  it('Login with valid creds', () => {
    const userName = 'tomsmith'
    const password = 'SuperSecretPassword!';

    cy.get('[id="username"]')
      .type(userName)

    cy.get('[id="password"]')
      .type(password)

    cy.contains('[class="fa fa-2x fa-sign-in"]', 'Login')
      .click();

    cy.get('[id="flash"]')
      .should('contain.text', 'You logged into a secure area!')
  });

  it('Login with invalid username', () => {
    const invalidUsername = 'tomsmit'
    const password = 'SuperSecretPassword!';

    cy.get('[id="username"]')
      .type(invalidUsername)

    cy.get('[id="password"]')
      .type(password)

    cy.contains('[class="fa fa-2x fa-sign-in"]', 'Login')
      .click();
    
    cy.get('[id="flash"]')
      .should('contain.text', 'Your username is invalid!')
  });

  it('Login with invalid password', () => {
    const userName = 'tomsmith'
    const invalidPassword = 'SuperSecretPassword';

    cy.get('[id="username"]')
      .type(userName)

    cy.get('[id="password"]')
      .type(invalidPassword)

    cy.contains('[class="fa fa-2x fa-sign-in"]', 'Login')
      .click();
    
    cy.get('[id="flash"]')
      .should('contain.text', 'Your password is invalid!')
  });

  it('Logout from the app', () => {
    const userName = 'tomsmith'
    const password = 'SuperSecretPassword!';

    cy.get('[id="username"]')
      .type(userName)

    cy.get('[id="password"]')
      .type(password)

    cy.contains('[class="fa fa-2x fa-sign-in"]', 'Login')
      .click();

    cy.get('[id="flash"]')
      .should('contain.text', 'You logged into a secure area!')

    cy.contains('[class="icon-2x icon-signout"]', 'Logout')
      .click();

    cy.get('[id="flash"]')
      .should('contain.text', 'You logged out of the secure area!')
  });
});
