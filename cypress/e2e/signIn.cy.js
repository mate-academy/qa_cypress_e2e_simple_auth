describe('Sign In', () => {
  const baseUrl = 'https://the-internet.herokuapp.com/login';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should allow a user to log in with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Assertions
    cy.url().should('include', '/secure');
    cy.get('.flash.success')
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area!');
    cy.get('h2').should('contain.text', 'Secure Area');

    // Verify Logout button is visible
    cy.get('a[href="/logout"]').should('be.visible');
  });

  it('shows username invalid message for invalid username', () => {
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/login');
    cy.get('.flash.error')
      .should('be.visible')
      .and('contain.text', 'Your username is invalid!');

    // Verify login form is still visible
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
  });

  it('shows password invalid message for invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('wrongPassword');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/login');
    cy.get('.flash.error')
      .should('be.visible')
      .and('contain.text', 'Your password is invalid!');

    // Verify login form is still visible
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
  });

  it('should allow a logged-in user to log out successfully', () => {
    // Login first
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');

    // Verify Logout button is visible before clicking
    cy.get('a[href="/logout"]').should('be.visible');

    // Click Logout
    cy.get('a[href="/logout"]').click();

    // Assertions after logout
    cy.url().should('include', '/login');
    cy.get('.flash.success')
      .should('be.visible')
      .and('contain.text', 'You logged out of the secure area!');

    // Verify login form is visible again
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
  });
});
