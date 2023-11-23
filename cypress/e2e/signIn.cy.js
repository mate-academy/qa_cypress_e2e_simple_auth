/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  const userName = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const userNameFake = Math.random().toString().slice(2);
  const passwordFake = Math.random().toString().slice(2);
  const text = {
    loginPage: 'Login Page',
    area: 'Secure Area'
  };

  it('should provide an ability to log in with valid credentials', () => {
    cy.contains('Login Page')
      .click();

    cy.get('h2')
      .should('contain.text', text.loginPage);

    cy.get('[id="username"]')
      .type(userName);

    cy.get('[id="username"]')
      .should('have.value', userName);

    cy.get('[id="password"]')
      .type(password);

    cy.get('[id="password"]')
      .should('have.value', password);

    cy.get('.fa')
      .click();

    cy.get('h2')
      .should('contain.text', text.area);

    cy.url()
      .should('include', '/secure');
  });

  it('should not log in with invalid user name', () => {
    cy.contains('Login Page')
      .click();

    cy.get('h2')
      .should('contain.text', text.loginPage);

    cy.get('[id="username"]')
      .type(userNameFake);

    cy.get('[id="username"]')
      .should('have.value', userNameFake);

    cy.get('[id="password"]')
      .type(password);

    cy.get('[id="password"]')
      .should('have.value', password);

    cy.get('.fa')
      .click();

    cy.get('[id="flash"]')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should not log in with invalid password', () => {
    cy.get('[id="username"]')
      .type(userName);

    cy.get('[id="username"]')
      .should('have.value', userName);

    cy.get('[id="password"]')
      .type(passwordFake);

    cy.get('[id="password"]')
      .should('have.value', passwordFake);

    cy.get('.fa')
      .click();

    cy.get('[id="flash"]')
      .should('contain.text', 'Your password is invalid!');

    cy.url()
      .should('include', '/');
  });

  it('should provide an ability to log out', () => {
    cy.contains('Login Page')
      .click();

    cy.get('h2')
      .should('contain.text', text.loginPage);

    cy.get('[id="username"]')
      .type(userName);

    cy.get('[id="username"]')
      .should('have.value', userName);

    cy.get('[id="password"]')
      .type(password);

    cy.get('[id="password"]')
      .should('have.value', password);

    cy.get('.fa')
      .click();

    cy.get('h2')
      .should('contain.text', text.area);

    cy.url()
      .should('include', '/secure');

    cy.get('.button')
      .click();

    cy.get('h2')
      .should('contain.text', text.loginPage);
  });
});
