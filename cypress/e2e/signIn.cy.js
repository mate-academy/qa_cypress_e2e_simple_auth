/// <reference types="cypress" />

class AuthPage {
  get usernameField() {
    return cy.get('#username');
  }

  get passwordField() {
    return cy.get('#password');
  }

  get submitButton() {
    return cy.get('button[type="submit"]');
  }

  get flashMessage() {
    return cy.get('#flash');
  }

  get loginForm() {
    return cy.get('#login');
  }

  get logoutLink() {
    return cy.get('a[href="/logout"]');
  }

  get heading() {
    return cy.get('h2');
  }

  visit() {
    cy.visit('https://the-internet.herokuapp.com/login');
  }

  login(username, password) {
    this.usernameField.type(username);
    this.passwordField.type(password, { log: false });
    this.submitButton.click();
  }

  logout() {
    this.logoutLink.click();
  }

  assertMessage(type, text) {
    this.flashMessage.should('be.visible')
      .and('have.class', type)
      .and('contain.text', text);
  }

  assertLoggedIn() {
    cy.location('pathname').should('eq', '/secure');
    this.assertMessage('success', 'You logged into a secure area!');
    this.heading.should('contain.text', 'Secure Area');
    this.logoutLink.should('be.visible');
  }

  assertLoginPage() {
    cy.location('pathname').should('eq', '/login');
    this.loginForm.should('be.visible');
  }
}

describe('Authentication', () => {
  const authPage = new AuthPage();

  beforeEach(() => {
    authPage.visit();
  });

  it('should log in with valid credentials', () => {
    authPage.login('tomsmith', 'SuperSecretPassword!');
    authPage.assertLoggedIn();
  });

  it('should show an error for an invalid username', () => {
    authPage.login('invalidUser', 'SuperSecretPassword!');
    authPage.assertMessage('error', 'Your username is invalid!');
    authPage.assertLoginPage();
  });

  it('should show an error for an invalid password', () => {
    authPage.login('tomsmith', 'invalidPassword');
    authPage.assertMessage('error', 'Your password is invalid!');
    authPage.assertLoginPage();
  });

  it('should log out after a successful login', () => {
    authPage.login('tomsmith', 'SuperSecretPassword!');
    authPage.assertLoggedIn();
    authPage.logout();

    authPage.assertMessage('success', 'You logged out of the secure area!');
    authPage.assertLoginPage();
  });
});
