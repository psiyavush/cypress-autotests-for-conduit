const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "https://cypress-testing-website.vercel.app/",
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false
  },
});