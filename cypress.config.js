const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Configura o bundler para interpretar arquivos .feature
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);

      // Adiciona o plugin do Cucumber
      await addCucumberPreprocessorPlugin(on, config);
      
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",  // Pasta dos arquivos .feature
    supportFile: "cypress/support/e2e.js",           // Arquivo de suporte global
    baseUrl: "https://bugbank.netlify.app/",          // URL base da aplicação
  },
});
