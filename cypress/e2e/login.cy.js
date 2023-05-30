describe('Login page', () => {
  beforeEach(() => {

    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('', () => {

  it('should login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith')
    cy.get('#password')
      .type('SuperSecretPassword!')
    cy.contains('.fa', 'Login')
      .click()
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!')
  });

  it('should not login with invalid creds', () => {
    cy.get('#username')
      .type('wrongUser')
    cy.get('#password')
      .type('WrongPassword!')
    cy.contains('.fa', 'Login')
      .click()
    cy.get('#flash')
      .should('contain', 'Your username is invalid!')
  });

  it('should logout from the app', () => {
    cy.get('#username')
      .type('tomsmith')
    cy.get('#password')
      .type('SuperSecretPassword!')
    cy.contains('.fa', 'Login')
      .click()
    cy.contains('.icon-2x', 'Logout')
      .click()
      cy.get('#flash')
      .should('contain', 'You logged out of the secure area!')
  });
});
});