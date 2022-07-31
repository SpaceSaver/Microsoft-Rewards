const puppeteer = require("puppeteer");
function wait(ms) {
    return new Promise(res => {
        setTimeout(res, ms);
    });
}
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        userDataDir: "./data",
        defaultViewport: null
    });
    const page = (await browser.pages())[0];
    page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77");
    await page.goto("https://rewards.microsoft.com/Signin?idru=%2F");
    await page.waitForNavigation({waitUntil: "load", timeout: 0});
    while (!(await page.url()).startsWith("https://rewards.microsoft.com")) {
        await page.waitForNavigation({waitUntil: "load", timeout: 0});
    }
    const string = "abcdefghijklmnopqrstuvwxyz1234567890";
    for (let x = 1; x <= string.length; x++) {
        await page.goto("https://www.bing.com/search?q=" + string.substring(0, x), {waitUntil: "networkidle0", timeout: 0});
    }
    const mstring = "abcdefghijklmnopqrstuvwxyz";
    page.setUserAgent("Mozilla/5.0 (Linux; Android 11; M2101K7BG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.40 Mobile Safari/537.36");
    for (let x = 1; x <= mstring.length; x++) {
        await page.goto("https://www.bing.com/search?q=" + mstring.substring(0, x), {waitUntil: "networkidle0", timeout: 0});
    }
    await browser.close();
})();