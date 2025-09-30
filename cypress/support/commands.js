// Command to log in
Cypress.Commands.add(
  'login',
  (username = 'tomsmith', password = 'SuperSecretPassword!') => {
    cy.visit('/login');
    cy.get('#username').clear();
    cy.get('#username').type(username);

    cy.get('#password').clear();
    cy.get('#password').type(password);

    cy.get('button[type="submit"]').click();
  }
);

// Command to log out
Cypress.Commands.add('logout', () => {
  cy.get('a[href="/logout"]').click();
});
