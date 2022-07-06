// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginUser', () => {
  const username = 'tomsmith'
  const password = 'SuperSecretPassword!'
  cy.visit('/login')
  cy.get('#username')
    .type(username)

    cy.get('#password')
    .type(password)

    cy.contains('button', 'Login')
    .click();
 })
 Cypress.Commands.add('assertPageUrl', (url) => {
  cy.url().should('equal', Cypress.config().baseUrl + url)
 })
 Cypress.Commands.add('loginUserInvalidName', () => {
  const usernameNotValid = 'tomsmith11'
  const password = 'SuperSecretPassword!'
  cy.visit('/login')
  cy.get('#username')
    .type(usernameNotValid)

    cy.get('#password')
    .type(password)

    cy.contains('button', 'Login')
    .click();
 })
 Cypress.Commands.add('loginUserInvalidPassword', () => {
  const username = 'tomsmith'
  const password = 'SuperSecretPassword'
  cy.visit('/login')
  cy.get('#username')
    .type(username)

    cy.get('#password')
    .type(password)

    cy.contains('button', 'Login')
    .click();
 })