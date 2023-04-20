/// <reference types = "cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  it('Login with valid creds', () => {
   cy.get('#username').type('tomsmith');
   cy.get('#password').type('SuperSecretPassword!');
   cy.contains('button', 'Login').click();
   cy.get('body').should('contain.text', 'You logged into a secure area!');
  });
it('Login with invalid creds (Username)', () => {
   cy.get('#username').type('amogsus');
   cy.get('#password').type('SuperSecretPassword!');
   cy.contains('button', 'Login').click();
   cy.get('#flash').should('contains.text', 'Your username is invalid!');
})
it('Login with invalid creds (Password)', () => {
   cy.get('#username').type('tomsmith');
   cy.get('#password').type('amogsus');
   cy.contains('button', 'Login').click();
   cy.get('#flash').should('contains.text','Your password is invalid!');
})
it('Sign out after logged in', () => {
   cy.get('#username').type('tomsmith');
   cy.get('#password').type('SuperSecretPassword!');
   cy.contains('button', 'Login').click();
   cy.contains('.button', 'Logout').click();
   cy.get('body').should('contain.text', 'You logged out of the secure area!');
})
});
