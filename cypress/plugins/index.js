/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars 
const xlsx = require('xlsx'); 
const fs = require('fs'); // for file
const path = require('path'); // for file path

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
    on('task', { 
        parseXlsx ({filePath}){ 
            return new Promise((resolve, reject) =>
            { 
                try{
                    const jsonData = xlsx.parse(fs.readFileSync(filePath)); 
                    resolve(jsonData);
                }
                catch (e){
                    reject(e);
                } 
            });
        }
    });
  }

  module.exports = (on,config) => {
    config.defaultCommandTimeout = 10000,
    config.pageLoadTimeout = 80000,
    {
      "viewportHeight": 600,
      "viewportWidth": 1000,
      "component": {
        "viewportHeight": 500,
        "viewportWidth": 500
      }
    }
}

const readXlsx = require("./readXlsx")
module.exports = (on,config) => {
  on('task', {
    'readXlsx': readXlsx.read
  })
}

const fs_ext = require("fs-extra")
//Reading custom config file in the Cypress framework
function getConfigurationByFile(file){
  const pathToConfigFile = path.resolve('cypress','config',`${file}.json`)
  if(!fs_ext.existsSync(pathToConfigFile)){ //returns true if path exists else false.
    console.log("No custom log file found..")
    return {}
  }
  return fs_ext.readJson(pathToConfigFile)
}

//plugins file
module.exports = (on,config) => {
  //accept a configFile or use development by default
  const file = config.env.configFile || 'development'
  return getConfigurationByFile(file)
}

/*
module.exports = (on,config) => {
  //add libs of cypress-plugin-retries 
  require('cypress-plugin-retries/lib/plugin')(on)
}
*/