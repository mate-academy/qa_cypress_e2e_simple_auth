

describe('Login page', () => {
  beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/login");
  });

  it('Should login with valid creds', () => {

    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

  });

  it("Should not login with invalid creds", () => {
   
    cy.get("#username")
      .type("tomsmith158");

    cy.get("#password")
      .type('SuperSecretPassword!158');

    cy.contains(".fa", "Login")
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('Should logout from the app', () => {
 
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

    cy.get('h2').
      should('contain.text', 'Secure Area');

    cy.contains('.button', 'Logout')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
