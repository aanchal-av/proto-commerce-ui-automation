const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 4000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/*.js',
  },
});
