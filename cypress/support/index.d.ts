declare namespace Cypress {
  interface Chainable<Subject> {
    userloginAPI(username: string, password: string): Chainable<any>;
  }
}