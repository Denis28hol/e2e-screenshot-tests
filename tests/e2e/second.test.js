const { test, expect } = require('@playwright/test');

test('Перевірка назви заголовка на другій сторінці', async ({ page }) => {
  await page.goto('http://localhost:3000/second.html');
  await expect(page).toHaveTitle(/Неправильна сторінка/);
});

test('Перевірка заголовка h2 на другій тестовій сторінці', async ({ page }) => {
  await page.goto('http://localhost:3000/second.html');
  const heading = page.locator('h2');
  await expect(heading).toHaveText(/Це друга тестова сторінка/);
});

test('Перевірка переходу з однієї сторінки на іншу вкладку', async ({ page }) => {
  await page.goto('http://localhost:3000/second.html');
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('text=Докладніше'),
  ]);
  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL('https://playwright.dev/');
});
