const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  env:{
       url: 'https://rahulshettyacademy.com/loginpagePractise/'
 },

  defaultCommandTimeout: 4000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/*.js',
  },
});
