describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an error for log in with invalid credits', () => {
    cy.get('#username').type('tomsmith23');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });
});
