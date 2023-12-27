describe('Login and Logout Flow', () => {
  it('Login with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[id="username"]').type('tomsmith');
    cy.get('[id="password"]').type('SuperSecretPassword!');
    cy.get('[class="fa fa-2x fa-sign-in"]').click();
    cy.get('#flash').should('contain', 'secure area')
  });

  it('Login with invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('fake');
    cy.get('#password').type('fake');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'invalid')
  });

  it('Logout from the app', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.icon-2x').click();
    cy.url().should('include', '/login')
  });
});
