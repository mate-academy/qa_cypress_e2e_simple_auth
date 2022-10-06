
Cypress.Commands.add('loginUser', (username, password) => {

  cy.get('#username')
    .type(`${username}`);
  cy.get('#password')
    .type(`${password}`);

  cy.get('.fa.fa-2x.fa-sign-in')
    .click();

}); 
