/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it('Should login with valid creds', () => {
    const username = 'tomsmith';
    const password = "SuperSecretPassword!";

    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);
    
    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
    
    cy.get('h2')
      .should('contain.text', 'Secure Area');
  });

  it("Should not login with invalid creds", () => {
    const username = "tomsmith2";
    const password = "SuperSecretP@ssword!";

    cy.get("#username")
      .type(username);

    cy.get("#password")
      .type(password);

    cy.contains(".fa", "Login")
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('Should logout from the app', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

    cy.get('h2').
      should('contain.text', 'Secure Area');

    cy.contains('.button', 'Logout')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });

});
