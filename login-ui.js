import { browser } from 'k6/browser';

export const options = {
  vus: 1,
  iterations: 1,
};

export default async function () {
  const page = await browser.newPage();

  try {
    await page.goto('https://test.k6.io/my_messages.php');

    // username
    await page.locator('input[name="login"]').type('admin');

    // password
    await page.locator('input[name="password"]').type('123');

    // login button
    await page.locator('input[type="submit"]').click();

    // wait after login
    await page.waitForTimeout(3000);

    // screenshot
    await page.screenshot({ path: 'login.png' });

  } finally {
    await page.close();
  }
}