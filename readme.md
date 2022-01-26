Workflow:
1. Fork the repo.
1. Clone **your** forked repository.
1. Create a new branch `git checkout -b develop`.
1. Resolve tasks in the `cypress`/`integration`/`signIn.spec.js`.
1. Create a pull request.

App for testing: `https://the-internet.herokuapp.com/login`

**Your task** is to automate the next test cases:

1. Login with valid creds (`tomsmith`/`SuperSecretPassword!`) and assert you successfully logged in.
2. Login with invalid creds and check validation error.
3. Logout from the app and assert you successfully logged out.
