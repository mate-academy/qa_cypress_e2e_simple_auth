it('should logout from the app', () => {
    cy.visit(`https://the-internet.herokuapp.com/secure`)
    cy.get('#username').type(`tomsmith`);
    cy.get('#password').type(`SuperSecretPassword!`);
    cy.get('.radius').click();
    cy.get('.button').click();
  }); 