/// <reference types="cypress" />

import { password, username } from '../support/validCredentials.js';
import { invUsername, invPassword } from '../support/invalidCredentials.js';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should an ability to log in with the valid credentials', () => {
    cy.get('input[id="username"]').type(username);
    cy.get('input[id="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.get('#flash.flash.success').should('exist');
    cy.get('a.button.secondary.radius[href="/logout"]').click();
    cy.get('#flash.flash.success').should('exist');
  });

  it('should not login with invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('input[id="username"]').type(invUsername);
    cy.get('input[id="password"]').type(invPassword);
    cy.get('button[type="submit"]').click();
    cy.get('#flash.flash.error').should('exist');
  });
});
