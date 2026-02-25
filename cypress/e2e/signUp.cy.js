/// <reference types="cypress" />

const { getRandomUserData } = require('../support/e2e');

describe('Sign Up page', () => {
  it('should provide an ability to register user', () => {
    cy.visit('/');

    const { username, email, password } = getRandomUserData();
    cy.registerNewUser(username, email, password);
  });
});
