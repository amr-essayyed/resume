const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file://' + __dirname + '/index.html', { waitUntil: 'networkidle0' });
    await page.pdf({ path: 'Amr_Essayyed_CV.pdf', format: 'A4' });
    await browser.close();
})();
