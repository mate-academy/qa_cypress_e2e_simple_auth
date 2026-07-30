class SignInPage {
  get usernameField() {
    return cy.get('#username');
  }

  get passwordField() {
    return cy.get('#password');
  }

  get loginButton() {
    return cy.get('button[type="submit"]');
  }

  get notification() {
    return cy.get('#flash');
  }

  get pageHeading() {
    return cy.get('h2');
  }

  get logoutButton() {
    return cy.contains('a', 'Logout');
  }

  visit() {
    cy.visit('https://the-internet.herokuapp.com/login');
  }

  typeUsername(username) {
    this.usernameField
      .clear()
      .type(username);
  }

  typePassword(password) {
    this.passwordField
      .clear()
      .type(password);
  }

  clickLoginButton() {
    this.loginButton.click();
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLoginButton();
  }

  clickLogoutButton() {
    this.logoutButton.click();
  }

  assertSuccessfulLogin() {
    cy.url().should('include', '/secure');

    this.pageHeading
      .should('be.visible')
      .and('contain', 'Secure Area');

    this.notification
      .should('be.visible')
      .and('contain', 'You logged into a secure area');

    this.logoutButton.should('be.visible');
  }

  assertInvalidUsernameError() {
    cy.url().should('include', '/login');

    this.notification
      .should('be.visible')
      .and('contain', 'Your username is invalid');
  }

  assertInvalidPasswordError() {
    cy.url().should('include', '/login');

    this.notification
      .should('be.visible')
      .and('contain', 'Your password is invalid');
  }

  assertSuccessfulLogout() {
    cy.url().should('include', '/login');

    this.notification
      .should('be.visible')
      .and('contain', 'You logged out of the secure area');

    this.pageHeading
      .should('be.visible')
      .and('contain', 'Login Page');

    this.loginButton.should('be.visible');
  }
}

export default SignInPage;
