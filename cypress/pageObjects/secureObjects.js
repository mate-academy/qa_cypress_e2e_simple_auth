/// <reference types="cypress" />

export default class SecurePage {
  get logOutButton() {
    return cy.get('[class="button secondary radius"]');
  }
}
