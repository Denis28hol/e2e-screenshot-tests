const { test, expect } = require('@playwright/test');

test('Заголовок сайту Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});

test('Наявність меню навігації', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page.locator('nav')).toBeVisible();
});
