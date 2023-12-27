describe('Login and Logout Flow', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'secure area')
  });

  it('Login with invalid username', () => {
    cy.get('#username').type('fake');
    cy.get('#password').type('SuperSecretPassword');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'invalid')
  });

  it('Login with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('fake');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'invalid')
  });

  it('Login with invalid credentials', () => {
    cy.get('#username').type('fake');
    cy.get('#password').type('fake');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'invalid')
  });

  it('Logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.icon-2x').click();
    cy.url().should('include', '/login')
  });
});
