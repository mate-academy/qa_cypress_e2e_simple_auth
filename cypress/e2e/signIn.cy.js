/// <reference types="cypress" />

const user = {
  username: 'tomsmith',
  password: 'SuperSecretPassword!'
}

const { username, password } = user;

describe('On the sign in page user should', () => {

  it('have an ability to log in with valid data', () => {
    cy.login(username, password);

    cy.get('.subheader')
      .should('contain.text', 'Welcome');
  });

  it('have an ability to log out from the account', () => {
    cy.login(username, password);

    cy.get('.button.secondary.radius')
      .should('contain', 'Logout')
      .click();

    cy.get('h2')
      .should('contain', 'Login Page');
  });

  it('receive an error message when trying to login with invalid data', () => {
    cy.login(`${username}qwe`, password);

    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  })
})