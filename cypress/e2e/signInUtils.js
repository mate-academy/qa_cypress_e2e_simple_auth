export const username = 'tomsmith';
export const password = 'SuperSecretPassword!';
export const usernameInvalid = 'tom';
export const passwordInvalid = 'notPass!';
export const secureAreaUrl = Cypress.config().baseUrl + 'secure';
export const loginPageUrl = Cypress.config().baseUrl + 'login';
export const successfulMessage = 'You logged into a secure area!';
export const invalidUserMessage = 'Your username is invalid!';
export const invalidPasswordMessage = 'Your password is invalid!';
export const logOutMessage = 'You logged out of the secure area!';

export function login(user, pass) {
  cy.visit('/login');

  cy.get('#username').type(user);
  cy.get('#password').type(pass);
  cy.get('.fa.fa-2x.fa-sign-in').click();
}
export function logout() {
  cy.get('.icon-2x.icon-signout').click();
}
