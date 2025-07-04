const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const fs= require('fs')

module.exports = defineConfig({
  env:{
       url: 'https://rahulshettyacademy.com/loginpagePractise/',
       grepFilterSpecs: true, // Run only tests matching grep
       grepOmitFiltered: true, // Skip tests that don’t match grep

 },

  defaultCommandTimeout: 4000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    html: true,
    json:true,
    saveAllAttempts: false
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
      require('cypress-grep/src/plugin')(config)
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });
      on('after:run', async (result) => {
        console.log(result);
        fs.writeFileSync('cypress/reports/index.json',JSON.stringify(result))
        console.log('override after:run');
        await afterRunHook();
      });
      return config
      
    },
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/*.js',
  },

  projectId: 'p29b28'
});