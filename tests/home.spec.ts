import { test, chromium, expect } from '@playwright/test';

// when would I use this?:
// test.describe("a11y-home-page", () => {
//     test("should not have any automatically detectable accessibility issues", async ({ page }) => {
//         await page.goto("/");
//         const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
//         expect(accessibilityScanResults.violations).toEqual([]);
//     });
// });

// test('Home page should display correct heading and button', async ({ page }) => {
//     await page.goto('http://localhost:3000/');
//     await expect(page.locator('[data-test="heading"]')).toHaveText('Welcome to Home Page');
//     await expect(page.locator('[data-test="click-me"]')).toBeVisible();
// })

// page fixture example:
test('kick start with playwright', async({ page }) => {

    // playwright provides a page fixture to interact with browsers.
        // const browser = await chromium.launch();
        // const context = await browser.newContext();
        // const page = await context.newPage();

    await page.goto('https://www.google.com');
    await page.getByRole('button', { name: 'Apps de Google' }).click(); //performing a click action on the google apps button
    console.log("my first test");
})

