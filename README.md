# hostingerHomework
Homework for Hostinger

In order to run, you'll need Node >= v18.20.2 (Tested with this exact version)

```nodejs.org/en/download```

Once node is installed, clone the repo, open a terminal at that folder and run:

```npm install```

After dependencies are installed, you can open Cypress using: 

```npx cypress open```

Cypress will take a few seconds to open, will display a 'What's new screen', just click Continue -> E2E Testing -> Chrome and Start E2E Testing in Chrome. Specs tab should open, simply click on 'hostinger.spec.cy.js' and the test should start running.

You may also run Cypress in headless mode by entering:

```npx cypress run```