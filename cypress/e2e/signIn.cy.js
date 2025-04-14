/// <reference types="cypress" />
import { loginUser } from '../support/helpers';

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should log in with valid creds', () => {
    loginUser(username, password);

    cy.contains('.success', 'You logged into a secure area!');
  });

  it(`should assert validation error
    with invalid creds to log in`, () => {
    loginUser('Invalidusername', 'Invalidpassword');

    cy.contains('.error', 'Your username is invalid!');
  });

  it('should successfully logout from app', () => {
    loginUser(username, password);

    cy.get('[href="/logout"]').click();

    cy.contains('.success', 'You logged out of the secure area!');
  });
});
