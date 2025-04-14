/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should show the appropriate message if username is invalid', () => {
    cy.login({
      username: 'invalidName',
      password: 'SuperSecretPassword!'
    });

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should show the appropriate message if password is invalid', () => {
    cy.login({
      username: 'tomsmith',
      password: 'invalidPassword'
    });

    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('should provide an ability to log in with valid credentials', () => {
    cy.login({
      username: 'tomsmith',
      password: 'SuperSecretPassword!'
    });
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');

    cy.logout();
  });

  it(`should provide an ability to log out for authorized user 
  and show message about it`, () => {
    cy.login({
      username: 'tomsmith',
      password: 'SuperSecretPassword!'
    });

    cy.logout();

    cy.get('#flash').should(
      'contain.text',
      'You logged out of the secure area!'
    );
  });
});
