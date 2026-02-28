import { test, expect } from '@playwright/test';

// Example test - Record new from playwright
test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dgoogle.coom%26oq%3Dgoogle.coom%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDIwNjlqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3D1wWiaYqSD7-awbkP4oGS4Q0&q=EgSzMzzkGNeLiM0GIjBGREgoWnqWpvfZQpG7sBXVOqLeYYh_TndUmmwNmjglIeYU4dwxJl05hi5oLLSS8vYyAVJaAUM');
  await page.goto('https://www.google.com/search?q=google.coom&oq=google.coom&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDIwNjlqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8&sei=KgaiaeDyHousqtsPr6y9sAI');
});