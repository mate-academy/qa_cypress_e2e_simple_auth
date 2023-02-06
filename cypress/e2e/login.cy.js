describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Successful Login', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .should('contain.text', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!')
  });

  it('Wrong Login', () => {
    cy.get('#username')
      .type('tomsmith1');

    cy.get('#password')
      .type('SuperSecretPassword!1');

    cy.get('.radius')
      .should('contain.text', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('', () => {
    it('Successful Logout', () => {
      cy.get('#username')
      .type('tomsmith');

      cy.get('#password')
        .type('SuperSecretPassword!');

      cy.get('.radius')
        .should('contain.text', 'Login')
        .click();

      cy.get('.radius')
        .should('contain.text', 'Logout')
        .click();

      cy.get('#flash')
        .should('contain.text', 'You logged out of the secure area!');
    });
  });
});
