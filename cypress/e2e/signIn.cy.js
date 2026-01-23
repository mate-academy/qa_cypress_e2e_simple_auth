/// <reference types="cypress" />

const validUserName = 'tomsmith';
const validPassword = 'SuperSecretPassword!';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login user with valid creds', () => {
    cy.fillAuthFields(validUserName, validPassword);

    cy.assertPageUrl('secure');

    cy.get('h2').should('contain.text', 'Secure Area');
  });

  it('should show error warning with invalid username', () => {
    cy.fillAuthFields('ef3wef', validPassword);

    cy.assertPageUrl('login');

    cy.get('#flash').should('contain.text', ' Your username is invalid!');
  });

  it('should show error warning with invalid password', () => {
    cy.fillAuthFields(validUserName, 'evewrv');

    cy.assertPageUrl('login');

    cy.get('#flash').should('contain.text', ' Your password is invalid!');
  });

  it('should logout from the app', () => {
    cy.fillAuthFields(validUserName, validPassword);

    cy.get('.button').click();

    cy.assertPageUrl('login');
  });
});
