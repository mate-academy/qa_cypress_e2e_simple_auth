/* Cypress.Commands.add('loginUser', () => {

  cy.get('#username')
    .type('tomsmith');
  cy.get('#password')
    .type('SuperSecretPassword!');

  cy.get('.fa.fa-2x.fa-sign-in')
    .click();

});  */

Cypress.Commands.add('loginUser', (username, password) => {

  cy.get('#username')
    .type(`${username}`);
  cy.get('#password')
    .type(`${password}`);

  cy.get('.fa.fa-2x.fa-sign-in')
    .click();

}); 
