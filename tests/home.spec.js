const { test, expect } = require("@playwright/test");

test("Home page title should be visible", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Example Domain/);
});
