/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  })

  const username = "tomsmith";
  const password = "SuperSecretPassword!";

  it('Should login with valid creds', () => {
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

  it("Should not login with invalid username", () => {
    const InvalidUsername = username + 2;

    cy.get("#username")
      .type(InvalidUsername);

    cy.get("#password")
      .type(password);

    cy.contains(".fa", "Login")
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('Should not login with invalid password', () => {
    const InvalidPassword = password + 22;

    cy.get('#username')
      .type(username);

    cy.get("#password")
      .type(InvalidPassword);

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });

  it('Should logout from the app', () => {
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
