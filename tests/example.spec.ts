import { test, expect } from '@playwright/test';

test("login with valid test credentials to the Stripe's sandbox site", async ({ page }) => {
  
  await page.goto('https://dashboard.stripe.com/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sign in to your account/);

  // Fill the email and password fields.
  await page.getByLabel('Email').fill([process.env.EMAIL_ADDRESS);
  await page.getByLabel('Email').fill([process.env.PASSWORD);

  //const locator = page.frameLocator('#idd').getByRole('button', {frame: 'Sign in'});
  //await locator.click();

  await page.getByRole('button', {name: 'Sign in'}).click();
  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  
});

