// @ts-check

const {test, expect} = require("@playwright/test")

test("orange hrm title validation", async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page).toHaveTitle('OrangeHRM');
});

