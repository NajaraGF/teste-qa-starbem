const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bugbank.netlify.app/",  // URL base
    setupNodeEvents(on, config) {
     
      return config;
    }
  }
});
