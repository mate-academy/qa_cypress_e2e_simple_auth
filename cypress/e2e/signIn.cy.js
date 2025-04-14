
describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  const Username = 'tomsmith';
  const Password = 'SuperSecretPassword!';
  const InvalidUsername = 'Invalid12';
  const InvalidPassword = 'InvalidPass12';
  it('should login user with valid data', () => {
    cy.get('#username').type(Username);
    cy.get('#password').type(Password);
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });
  it('should not login user with valid data', () => {
    cy.get('#username').type(InvalidUsername);
    cy.get('#password').type(InvalidPassword);
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });
  it('should logout user from the app', () => {
    cy.get('#username').type(Username);
    cy.get('#password').type(Password);
    cy.get('.radius').click();
    cy.get('a.button.secondary.redius').click();
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
