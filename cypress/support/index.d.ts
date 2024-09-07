/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      findById(id: string) : Chainable<any>;
    }
  }