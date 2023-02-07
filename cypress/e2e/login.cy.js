

describe('Login page', () => {
  beforeEach(() => {

    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('', () => {

  it('Should Login with valid creds', () => {
    cy.get('#username')
    .type('tomsmith');

    cy.get('#password')
    .type('SuperSecretPassword!');

    cy.get('.radius') // log in
    .click();

    cy.get('#flash')
    .should('contain.text', 'You logged into a secure area!');
  });

  it('Should Log out after login', () => {
    cy.get('#username')
    .type('tomsmith');

    cy.get('#password')
    .type('SuperSecretPassword!');

    cy.get('.radius') // log in
    .click();

    cy.get('.radius') // log out
    .click();

    cy.url()
      .should('include', '/login');
  });

  it('Should not Login with invalid password', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!1');

      cy.get('.radius') // log in
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });

  it('Should not Login with invalid username', () => {
    cy.get('#username')
      .type('tomsmith11');

    cy.get('#password')
      .type('SuperSecretPassword!');

      cy.get('.radius') // log in
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
    });
  });
});
