/// <reference types="cypress" />

before(function () {
    cy.visit('https://the-internet.herokuapp.com/login');
});

it('User can login with valid creds (tomsmith/SuperSecretPassword!)', () => {

});