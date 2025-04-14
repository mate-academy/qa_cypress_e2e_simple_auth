/// <reference types='cypress' />

describe('Sign In page', () => {
  const login = 'tomsmith';
  const pass = 'SuperSecretPassword!';
  const rightSite = 'https://the-internet.herokuapp.com/secure';
  const mainSite = 'https://the-internet.herokuapp.com/login';

  beforeEach(() => {
    cy.visit(mainSite);
  });

  describe('Site contents', () => {
    it('should contain "Login Page" in header', () => {
      cy.get('h2').should('have.text', 'Login Page');
    });

    it('should contain instruction in subheader', () => {
      cy.get('h4')
        .invoke('text')
        .should((text) => {
          expect(text.length).to.be.greaterThan(50);
        });
    });

    it('should have a "Login" button', () => {
      cy.get('.radius')
        .should('have.text', ' Login')
        .and('exist')
        .and('be.visible')
        .and('have.attr', 'type', 'submit');
    });
  });

  describe('Valid login', () => {
    beforeEach(() => {
      cy.get('#username').type(login);
      cy.get('#password').type(pass);
    });

    it('should login with valid data', () => {
      cy.get('form').find('button[type="submit"]').click();
    });

    it('should return code 200 for POST method', () => {
      cy.request({
        method: 'POST',
        url: 'https://the-internet.herokuapp.com/authenticate',
        body: { username: login, password: pass }
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    it('should redirect to the correct site', () => {
      cy.get('form').find('button[type="submit"]').click();
      cy.url().should('eq', rightSite);
    });
  });

  describe('Invalid login', () => {
    it('should display error message for invalid login', () => {
      cy.get('#username').type('tommssmith');
      cy.get('#password').type(pass);
      cy.get('form').find('button[type="submit"]').click();

      cy.get('#flash')
        .should('be.visible')
        .and('contain', 'Your username is invalid!');
    });

    it(`should display error message for valid login
       but invalid password`, () => {
      cy.get('#username').type(login);
      cy.get('#password').type('randompassword');
      cy.get('form').find('button[type="submit"]').click();

      cy.get('#flash')
        .should('be.visible')
        .and('contain', 'Your password is invalid!');
    });
  });

  describe('User Logout', () => {
    beforeEach(() => {
      cy.get('#username').type(login);
      cy.get('#password').type(pass);
      cy.get('form').find('button[type="submit"]').click();
    });

    it('should properly log out user', () => {
      cy.get('.button').click();
      cy.url().should('eq', mainSite);
    });
  });
});
