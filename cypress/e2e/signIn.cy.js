describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in with valid credentials', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.contains('button[type="submit"]', 'Login').click();

    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('should display validation errors with invalid credentials', () => {
    cy.get('#username').type(username + '1');

    cy.get('#password').type(password);

    cy.contains('button[type="submit"]', 'Login')
      .click();

    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('should display validation errors with invalid credentials', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password + '1');

    cy.contains('button[type="submit"]', 'Login')
      .click();

    cy.contains('Your password is invalid!').should('be.visible');
  });

  it('should log out successfully', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);
    cy.contains('button[type="submit"]', 'Login')
      .click();

    cy.contains('You logged into a secure area!').should('be.visible');

    cy.contains('.button', 'Logout')
      .click();
    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
