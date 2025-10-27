const { test, expect } = require('@playwright/test');

test('Скріншот всієї сторінки', async ({ page }) => {
  await page.goto('http://localhost:3000/second.html');
  expect(await page.screenshot()).toMatchSnapshot('screenshots/second-page/full.png');
});

test('Скріншот заголовка h2', async ({ page }) => {
  await page.goto('http://localhost:3000/second.html');
  const heading = await page.locator('h2');
  expect(await heading.screenshot()).toMatchSnapshot('screenshots/second-page/h2.png');
});
