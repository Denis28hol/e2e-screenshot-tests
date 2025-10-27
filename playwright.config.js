import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    headless: true,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'Mobile Chrome', use: { ...devices['iPhone 15 Pro MAX'] } }
  ],
  webServer: {
  command: 'npx http-server public -p 3000',
  url: 'http://localhost:3000',
  reuseExistingServer: false, 
  },
});
