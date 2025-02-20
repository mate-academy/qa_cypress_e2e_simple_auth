/// <reference types="cypress" />
import SignInPage from '../pageObjects/signInObjects';
import SecurePage from '../pageObjects/secureObjects';
const signInPage = new SignInPage();

const securePage = new SecurePage();

const username = 'tomsmith';
const password = 'SuperSecretPassword!';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with valid credentials', () => {
    signInPage.typeInUsernameField(username);
    signInPage.typeInPasswordField(password);
    signInPage.clickLogin();
    signInPage.assertNotification('You logged into a secure area!');
    cy.assertUrl('/secure');
  });

  it('should not login with invalid credentials', () => {
    signInPage.typeInUsernameField('myusername');
    signInPage.typeInPasswordField('jhHJu9=_');
    signInPage.clickLogin();
    signInPage.assertNotification('Your username is invalid!');
    cy.assertUrl('/login');
  });

  it('should logout', () => {
    signInPage.typeInUsernameField(username);
    signInPage.typeInPasswordField(password);
    signInPage.clickLogin();
    securePage.logOutButton.click();
    signInPage.assertNotification('You logged out of the secure area!');
    cy.assertUrl('/login');
  });
});
