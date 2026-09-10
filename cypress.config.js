const { defineConfig } = require("cypress");
const dotenvPlugin = require('cypress-dotenv');
const fs = require('fs');
const path = require('path');

function getConfigurationByFile(env) {
  const pathToConfigFile = path.resolve('config', `${env}.json`);
  if (!fs.existsSync(pathToConfigFile)) {
    throw new Error(`Config file ${pathToConfigFile} does not exist`);
  }
  return JSON.parse(fs.readFileSync(pathToConfigFile, 'utf-8'));
}

module.exports = defineConfig({
  projectId: 'r74njs',
  reporter: process.env.CI ? 'spec' : 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress TAF Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('cypress-terminal-report/src/installLogsPrinter')(on);
      
      config = dotenvPlugin(config);
      
      const environment = config.env.configFile || 'qa';
      const envConfig = getConfigurationByFile(environment);

      config.baseUrl = envConfig.baseUrl;
      config.env.apiUrl = envConfig.apiUrl;

      return config;
    },
  },
});
