/// <reference types="cypress" />
interface Creds {
  username: string;
  password: string;
}

declare namespace Cypress {
  interface Chainable<Subject> {
    login(creds: Creds): Chainable<Creds>;
    logout(): Chainable<any>;
  }
}
