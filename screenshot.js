const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000/home', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: '/Users/andresurbanozuniga/.gemini/antigravity/brain/d2e886bc-6ba6-47b3-90ff-dd7fa2d31dfe/desktop_home_no_nav.png', fullPage: true });
  await browser.close();
})();
