// cypress.config.js

const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }));
  return config;
}

module.exports = defineConfig({
 e2e: {
    specPattern: [
      "cypress/e2e/spec/api/**/*.feature",
      "cypress/e2e/spec/ui/**/*.feature"
    ],
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents,
    baseUrl: "https://serverest.dev"
  },
  
  cucumber: {
    stepDefinitions: [
      "cypress/support/step_definitions/**/*.step.{js,ts}"
    ]
  }
});