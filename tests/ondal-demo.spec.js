import { test, expect } from '@playwright/test';

test('test ondal', async ({ page }) => {
  await page.goto('https://www.beta-ondal.co.uk/');

  await page.getByRole('button', { name: 'Accept all cookies' }).click();
  
  await page.getByTestId('slider-apply-now').click();
  
  await page.locator('div').filter({ hasText: /^are at least 18 years old$/ }).nth(1).click();
  await page.getByLabel('live in the UK').check();
  await page.getByLabel('are able to receive a text').check();
  await page.getByLabel('have an email account').check();
  
  await page.getByRole('button', { name: 'Continue' }).click();
  
  await page.getByRole('combobox').selectOption('Mr');
  await page.getByLabel('First name').fill('Test');
  await page.getByLabel('Surname').fill('Test');
  await page.getByLabel('Mobile number').fill('07123123123');
  await page.getByLabel('Date of birth').fill('1991-06-06');
  await page.getByLabel('Email address').fill('test.test@test.invalid.com');
  // await page.frameLocator('iframe[name="a-bbgd004qb4th"]').getByLabel('I\'m not a robot').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(2000);
});