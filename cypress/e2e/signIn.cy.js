/// <reference types="cypress" />

import SignInPage from '../support/signInPage';

describe('Sign In page', () => {
  const signInPage = new SignInPage();

  beforeEach(() => {
    signInPage.visit();
  });

  it('should allow a user to log in with valid credentials', () => {
    signInPage.login('tomsmith', 'SuperSecretPassword!');

    signInPage.assertSuccessfulLogin();
  });

  it('should display an error for an invalid username', () => {
    signInPage.login('invalidUsername', 'SuperSecretPassword!');

    signInPage.assertInvalidUsernameError();
  });

  it('should display an error for an invalid password', () => {
    signInPage.login('tomsmith', 'invalidPassword');

    signInPage.assertInvalidPasswordError();
  });

  it('should allow a logged-in user to log out', () => {
    signInPage.login('tomsmith', 'SuperSecretPassword!');
    signInPage.assertSuccessfulLogin();

    signInPage.clickLogoutButton();

    signInPage.assertSuccessfulLogout();
  });
});
