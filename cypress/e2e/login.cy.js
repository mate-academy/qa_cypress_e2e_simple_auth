describe('Login page', () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login")
  });

  it('user should be able to login with valid creds', () => {
    cy.get('#username').click();
    cy.get('#username').type("tomsmith");
    cy.get('#password').click();
    cy.get('#password').type("SuperSecretPassword!");
    cy.get('.radius').click();
    cy.get('.flash.success').should('contain.text', 'You logged into a secure area!')
});

  it('user should not be able to login with invalid Username', () => {
  cy.get('#username').click();
  cy.get('#username').type("username");
  cy.get('#password').click();
  cy.get('#password').type("SuperSecretPassword");
  cy.get('.radius').click();
  cy.get('.flash.error').should('contain.text', 'Your username is invalid!')
});

it('user should not be able to login with invalid Password', () => {
  cy.get('#username').click();
  cy.get('#username').type("tomsmith");
  cy.get('#password').click();
  cy.get('#password').type("password");
  cy.get('.radius').click();
  cy.get('.flash.error').should('contain.text', 'Your password is invalid!')
});

it('user should be able to log out', () => {
  cy.get('#username').click();
  cy.get('#username').type("tomsmith");
  cy.get('#password').click();
  cy.get('#password').type("SuperSecretPassword!");
  cy.get('.radius').click();
  cy.get('.flash.success').should('contain.text', 'You logged into a secure area!')
  cy.get('.button.secondary.radius').click();
  cy.get('.flash.success').should('contain.text', 'You logged out of the secure area!')
});
});
