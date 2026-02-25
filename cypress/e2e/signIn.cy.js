/// <reference types="cypress" />

const { getRandomUserData } = require('../support/e2e');

describe('Sign In page', () => {
  beforeEach(() => {});

  it('should provide an ability to log in', () => {
    cy.visit('/');

    const { username, email, password } = getRandomUserData();
    cy.registerNewUser(username, email, password)
      .then((res) => {
        cy.request('POST', '/api/users/login', {
          user: {
            email,
            password
          }
        });
      })
      .then((res) => {
        window.localStorage.setItem('user', JSON.stringify(res.body.user));
      });
  });
});
