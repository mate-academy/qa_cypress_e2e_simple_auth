/// <reference types='cypress' />

describe("Sign In page", () => {
  const user = {
    username: "tomsmith",
    password: "SuperSecretPassword!",
  };

  beforeEach(() => {
    cy.visit("/login");
  });

  it("should provide the ability to logged in with valid creds", () => {
    cy.login(user.username, user.password);
    cy.assertMessage("You logged into a secure area!");
  });

  it("shouldnt provide the ability to logged in with invalid username", () => {
    cy.login("ivalidUsername", user.password);
    cy.assertMessage("Your username is invalid!");
  });

  it("shouldnt provide the ability to logged in with invalid password", () => {
    cy.login(user.username, "invalidPassword");
    cy.assertMessage("Your password is invalid!");
  });

  it("should provide the ability to logged out", () => {
    cy.login(user.username, user.password);
    cy.contains("a", "Logout").click();
    cy.assertMessage("You logged out of the secure area!");
  });
});
