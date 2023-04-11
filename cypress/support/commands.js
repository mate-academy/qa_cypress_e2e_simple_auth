
Cypress.Commands.add('findById', (id) => {
    cy.get(`[id="${id}"]`)
});

Cypress.Commands.add('assertMessage', (message) => {
    cy.get('.flash')
      .should('contain.text', `${message}`); 
});

Cypress.Commands.add('clickButton', (button) => {
    cy.contains('.radius', `${button}`)  
      .click();
});
