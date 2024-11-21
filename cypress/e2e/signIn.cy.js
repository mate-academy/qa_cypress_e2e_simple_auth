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

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should display validation errors with invalid credentials', () => {
    cy.get('#username').type(username + '1');

    cy.get('#password').type(password);

    cy.contains('button[type="submit"]', 'Login')
      .click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should display validation errors with invalid credentials', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password + '1');

    cy.contains('button[type="submit"]', 'Login')
      .click();

    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('should log out successfully', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);
    cy.contains('button[type="submit"]', 'Login')
      .click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');

    cy.contains('.button', 'Logout')
      .click();
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
