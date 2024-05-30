import { test, expect } from '@playwright/test';

test('ornage login test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.waitForTimeout(5000);
  await page.getByRole('button', {name: 'Login'}).click();

  let profilePic = page.getByAltText('profile picture');
  await profilePic.waitFor();
  await profilePic.click();
  await page.waitForTimeout(5000);

});