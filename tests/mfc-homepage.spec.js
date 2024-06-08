import { test, expect } from '@playwright/test';

test('test mfc', async ({ page }) => {
  await page.goto('http://mfc.work.local:86/');
  await page.getByRole('button', { name: 'Accept all cookies' }).click();
  await page.waitForTimeout(5000);
  await page.getByLabel('Loan amount').fill('168');
  await page.waitForTimeout(5000);
//   await page.getByLabel('Loan amount').click();
//   await page.waitForTimeout(10000);
  await page.getByTestId('slider-apply-now').click();
  await page.waitForTimeout(10000);
});