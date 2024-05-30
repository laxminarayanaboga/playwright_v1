// @ts-check

const { test, expect } = require("@playwright/test");

test("orange hrm url validation", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await expect(page).toHaveURL(/.*orangehrmlive/);
});
