// @ts-check
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  retries: 1,
  workers: 2,
  use: {
    baseURL: "https://example.com",
    headless: true
  },
  reporter: [["html", { open: "never" }]]
});
