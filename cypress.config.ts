import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 30000,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    responseTimeout: 20000,
    videoCompression: false,
    watchForFileChanges: false,
    baseUrl: 'https://demo.1crmcloud.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
