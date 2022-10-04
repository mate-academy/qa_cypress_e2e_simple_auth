describe('User should', () => {
  beforeEach (() => (
    cy.visit('https://the-internet.herokuapp.com/login')
  ));
    const validCreds = {
      username : 'tomsmith',
      password : 'SuperSecretPassword!'
   };
  it('to Login with valid creds', () => {
    cy.get('#username')
      .type(validCreds.username);
    cy.get('#password')
      .type(validCreds.password);
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!')
  });
  it('not to Login with invalid Username', () => {
    cy.get('#username')
      .type(validCreds.username+'invalid');
    cy.get('#password')
      .type(validCreds.password);
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!')
  });
  it('not to Login with invalid Password', () => {
    cy.get('#username')
      .type(validCreds.username);
    cy.get('#password')
      .type(validCreds.password+'invalid');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'Your password is invalid!')
  });
  it('to Logout from the app', () => {
    cy.get('#username')
      .type(validCreds.username);
    cy.get('#password')
      .type(validCreds.password);
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!')
    cy.get('.button')
      .should('contain', 'Logout')
      .click()
  });
});
