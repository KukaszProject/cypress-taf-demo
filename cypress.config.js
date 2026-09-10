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
  e2e: {
    setupNodeEvents(on, config) {
      config = dotenvPlugin(config);
      
      const environment = config.env.configFile || 'qa';
      const envConfig = getConfigurationByFile(environment);

      config.baseUrl = envConfig.baseUrl;
      config.env.apiUrl = envConfig.apiUrl;

      return config;
    },
  },
});
