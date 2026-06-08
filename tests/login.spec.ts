import { test, expect } from '@playwright/test';

test("login with valid test credentials to the Stripe's sandbox site", async ({ page }) => {
  
  await page.goto('https://dashboard.stripe.com/login');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Stripe Login | Sign in to the Stripe Dashboard/);

  if (!process.env.EMAIL_ADDRESS){
    throw new Error('EMAIL_ADDRESS is not set!');
  }
  if (!process.env.PASSWORD){
    throw new Error('PASSWORD is not set!');
  }
  await page.getByLabel('Email').fill(process.env.EMAIL_ADDRESS);
  await page.getByLabel('Password').fill(process.env.PASSWORD);
  await page.getByRole('button', {name: 'Sign in'}).click();
  
  
});




 //const locator = page.frameLocator('#idd').getByRole('button', {frame: 'Sign in'});
  //await locator.click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();