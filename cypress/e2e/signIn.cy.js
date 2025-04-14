/* eslint-disable max-len */
import SignInPage from '../support/SignInPage';

const VALID_USERNAME = 'tomsmith';
const VALID_PASSWORD = 'SuperSecretPassword!';
const INVALID_USERNAME = 'invalidUser';
const INVALID_PASSWORD = 'invalidPassword';

describe('Sign In page', () => {
  let signInPage;

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
    signInPage = new SignInPage();
  });

  it('should successfully log in with valid credentials', () => {
    signInPage.typeUsername(VALID_USERNAME);
    signInPage.typePassword(VALID_PASSWORD);
    signInPage.clickSubmit();
    signInPage.assertLoginSuccess();
  });

  it('should display error message with invalid username and valid password', () => {
    signInPage.typeUsername(INVALID_USERNAME);
    signInPage.typePassword(VALID_PASSWORD);
    signInPage.clickSubmit();
    signInPage.assertLoginFailure('Your username is invalid!');
  });

  it('should display error message with valid username and invalid password', () => {
    signInPage.typeUsername(VALID_USERNAME);
    signInPage.typePassword(INVALID_PASSWORD);
    signInPage.clickSubmit();
    signInPage.assertLoginFailure('Your password is invalid!');
  });

  it('should display error message with invalid credentials', () => {
    signInPage.typeUsername(INVALID_USERNAME);
    signInPage.typePassword(INVALID_PASSWORD);
    signInPage.clickSubmit();
    signInPage.assertLoginFailure('Your username is invalid!');
  });

  it('should successfully log out', () => {
    signInPage.typeUsername(VALID_USERNAME);
    signInPage.typePassword(VALID_PASSWORD);
    signInPage.clickSubmit();
    signInPage.clickLogout();
    signInPage.assertLogoutSuccess();
  });
});
