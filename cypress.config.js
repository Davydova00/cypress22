const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://uadreams.com/login/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  resolve: {
    modules: ['node_modules', 'путь/к/chai'],
  },
  env:{
    BASE_URL:'https://uadreams.com/login/'
  },
  viewportWidth: 1280,
  viewportHeight: 800,
  pageLoadTimeout: 120000
});