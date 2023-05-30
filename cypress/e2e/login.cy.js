/// <reference types="cypress" />

const baseURL = 'https://the-internet.herokuapp.com/login';

describe('Login page', () => {
  beforeEach(() => {
    cy.visit(baseURL)
  });

  it('Should log in with valid credentials', () => {
    
  });
});
