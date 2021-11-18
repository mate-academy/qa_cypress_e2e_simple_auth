describe('', () => {

  it('', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username')
      .type('tom1smith');
    cy.get('#password')
      .type('SperSecretPassword!');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
      cy.get('.button')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
})
