/// <reference types="cypress" />

type User = {
  username: string,
  password: string,
}

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Returns an element containing a placeholder with this value
     * @param placeholder String
     */
    getByPlaceholder(placeholder: string): Chainable<any>
  
    /**
     * Returns an element containing id with this value
     * @param placeholder String
     */
    getById(id: string): Chainable<any>

    /**
     * Returns a button containing text matching the param
     * @param buttonText String
     */
    getButtonByText(buttonText: string): Chainable<any>

    /**
     * Clicks on the submit button, submitting the form
     * @param buttonText String
     */
    submitFormByButton(buttonText: string): Chainable<any>

    /**
     * Assert whether user is logged in
     * @param username String
     */
    isUserAuthenticated(): Chainable<any>

    /**
     * Assert whether there is a flash error message with text form the param
     * @param username String
     */
    hasErrorMessage(errorMessage: string): Chainable<any>

    /**
     * Logs the user in with credentials provided in the param
     * @param username String
     */
    logUserIn(user: User): Chainable<any>
  }
}