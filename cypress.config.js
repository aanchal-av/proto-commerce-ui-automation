const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
       url: 'https://rahulshettyacademy.com/loginpagePractise/',
       grepFilterSpecs: true, // Run only tests matching grep
       grepOmitFiltered: true, // Skip tests that don’t match grep

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
      require('cypress-grep/src/plugin')(config)
      return config
    },
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/*.js',
  },
  projectId: 'p29b28'
});
