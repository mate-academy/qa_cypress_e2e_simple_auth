Cypress.Commands.add('findByPlaceholder', (placeholder) => {
  cy.get(`[placeholder=${placeholder}]`);
});

Cypress.Commands.add('findById', (placeholder) => {
  cy.get(`#${placeholder}`);
});
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  originalFn(url);
});
Cypress.Commands.add('assertPageUrl', (url) => {
  cy.url().should('eq', Cypress.config().baseUrl + url);
});

Cypress.Commands.add('findByTestId', (value) => {
  cy.get(`[data-cy=${value}]`);
});

Cypress.Commands.add('checkAuthorization', (username) => {
  cy.findByTestId('header-username').should('contain.text', username);
});
