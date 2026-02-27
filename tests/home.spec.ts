import { test, expect } from '@playwright/test';

// when would I use this?:
// test.describe("a11y-home-page", () => {
//     test("should not have any automatically detectable accessibility issues", async ({ page }) => {
//         await page.goto("/");
//         const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
//         expect(accessibilityScanResults.violations).toEqual([]);
//     });
// });

test('Home page should display correct heading and button', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page.locator('[data-test="heading"]')).toHaveText('Welcome to Home Page');
    await expect(page.locator('[data-test="click-me"]')).toBeVisible();
})