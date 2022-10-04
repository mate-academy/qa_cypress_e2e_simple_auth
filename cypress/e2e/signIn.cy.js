/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  })

  describe('Successful Login test', () => {
    const userName = 'tomsmith';
    const password = 'SuperSecretPassword!';
    it('Successful login test', () => {
        cy.get('label[for="username"]')
            .should('contain.text', 'Username');
        cy.get('input[name="username"]')
            .type(userName);

        cy.get('label[for="password"]')
            .should('contain.text', 'Password');
        cy.get('input[name="password"]')
            .type(password);

        cy.get('button[type="submit"]')
            .click();

        cy.get('div[class="flash success"]')
            .should('contain.text', 'You logged into a secure area!');
    });

    it('Login with correct password and incorrect username', () => {
        cy.get('input[name="username"]')
            .type(userName + 's');

        cy.get('input[name="password"]')
            .type(password);

        cy.get('button[type="submit"]')
            .click();

        cy.get('div[class="flash error"]')
            .should('contain.text', 'Your username is invalid!');
    });

    it('Login with correct username and incorrect password', () => {
        cy.get('input[name="username"]')
            .type(userName);

        cy.get('input[name="password"]')
            .type(password + '77');

        cy.get('button[type="submit"]')
            .click();

        cy.get('div[class="flash error"]')
            .should('contain.text', 'Your password is invalid!');
    });

    it('Successful Logout test', () => {
        cy.get('input[name="username"]')
            .type(userName);

        cy.get('input[name="password"]')
            .type(password);

        cy.get('button[type="submit"]')
            .click();

        cy.get('.button')
            .click();

        cy.get('div[class="flash success"]')
            .should('contain.text', 'You logged out of the secure area!');
    });
  });