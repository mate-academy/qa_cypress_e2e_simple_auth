describe('Authentication', () => {
  const validUser = {
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
  };

  const invalidUser = {
    username: 'invalidUser',
    password: 'invalidPassword',
  };

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login successfully with valid credentials', () => {
    cy.get('#username')
      .clear()
      .type(validUser.username);

    cy.get('#password')
      .clear()
      .type(validUser.password);

    cy.get('button[type="submit"]')
      .click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');

    cy.url()
      .should('include', '/secure');

    cy.get('.icon-signout')
      .should('be.visible');
  });

  it('should show validation error with invalid credentials', () => {
    cy.get('#username')
      .clear()
      .type(invalidUser.username);

    cy.get('#password')
      .clear()
      .type(invalidUser.password);

    cy.get('button[type="submit"]')
      .click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');

    cy.url()
      .should('include', '/login');
  });

  it('should logout successfully after login', () => {
    cy.get('#username')
      .type(validUser.username);

    cy.get('#password')
      .type(validUser.password);

    cy.get('button[type="submit"]')
      .click();

    cy.get('.icon-signout')
      .click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged out of the secure area!');

    cy.url()
      .should('include', '/login');
  });
});
