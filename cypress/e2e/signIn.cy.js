/// <reference types='cypress' />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should successfully log in', () => {
    cy.get('#username').type('tomsmith');

    cy.get('#password').type('SuperSecretPassword!' + `{Enter}`);

    cy.get('[data-alert]').should(
      'contain.text',
      'You logged into a secure area!'
    );
  });

  it('Return the mistake if the login data is incorrect', () => {
    cy.get('#username').type('tomsmit');
    cy.get('#password').type('SuperSecretPassword' + `{Enter}`);

    cy.get('[data-alert]').should('contain.text', 'is invalid!');

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword' + `{Enter}`);

    cy.get('[data-alert]').should('contain.text', 'is invalid!');
  });

  it('should log out successfully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!' + `{Enter}`);

    cy.get('[data-alert]').should(
      'contain.text',
      'You logged into a secure area!'
    );

    cy.get('.button').click();

    cy.get('[data-alert]').should(
      'contain.text',
      'You logged out of the secure area!'
    );
  });
});
