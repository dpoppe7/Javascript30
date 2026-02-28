// locators can be used to perform actions on page/frame 
// Usage:
//      page.locator('selector');
//      page.locator('selector', options;)

// There are different types of selectors. 
// Selector Xpath: //*[@name="user-name"] 
//                  //input[@name="user-name"]

import { test } from '@playwright/test';

// locator action method example
test('locator practice', async ({ page }) => {
    page.goto('https://www.saucedemo.com/');

    // using locator to perform actions on the page
    await page.locator("//input[@name='user-name']").fill('standard_user');
});