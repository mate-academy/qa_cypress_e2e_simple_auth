# Cypress: Simple Auth Assertions

## Workflow

1. Fork the repo.
1. Clone **your** forked repository.
1. Run the command `npm i`.
1. Create a new branch `git checkout -b testing`.
1. Resolve tasks in the `cypress`/`e2e`/`signIn.cy.js`.
1. Check yourself before submitting the task with a [Cypress checklist](https://mate-academy.github.io/qa-program/checklists/cypress.html).
1. Create a pull request.
1. Do not forget to click on `Re-request review` if you submit the homework after previous review.

## Task

App for testing: `https://the-internet.herokuapp.com/login`

**Your task** is to automate the next flow:

1. Login with valid creds (`tomsmith`/`SuperSecretPassword!`):
   - assert you successfully logged in.
1. Login with invalid creds (invalid Username, invalid Password):
   - assert validation errors.
1. Logout from the app:
   - assert you successfully logged out.
