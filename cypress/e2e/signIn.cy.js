describe('Login flow tests', () => {
  const baseUrl = 'https://the-internet.herokuapp.com/login';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should log in successfully with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
    cy.get('a[href="/logout"]').should('be.visible');
  });

  it('should show an error for invalid credentials', () => {
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('invalidPassword');
    cy.get('button[type="submit"]').click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
    cy.url().should('include', '/login');
  });

  it('should log out successfully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('a[href="/logout"]').click();

    cy.url().should('include', '/login');
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
