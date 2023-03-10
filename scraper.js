// Import the Chromium browser into our scraper.
import { chromium } from 'playwright';


const urls = [
    'https://eu.patagonia.com/be/en/product/womens-classic-retro-x-fleece-jacket/195699230927.html',
    'https://eu.patagonia.com/be/en/product/womens-classic-retro-x-fleece-jacket/195699566507.html',
    'https://eu.patagonia.com/be/en/product/mens-r2-yulex-front-zip-full-wetsuit/192964714762.html',
    "https://eu.patagonia.com/be/en/product/womens-classic-retro-x-fleece-jacket/195699230804.html",
];

// Tell the tab to navigate to the JavaScript topic page.

urls.forEach(async function (url) {

    const browser = await chromium.launch();

    // Open a new page / tab in the browser.
    const page = await browser.newPage();

    await page.goto(url);

    const itemName = await page.locator("//h1[@id='product-title']").innerText();
    const itemColor = await page.locator("//span[@class='js-buy-config-select-color buy-config-select-color']").textContent();

    // const inStock = await page.locator("//span[@class='buy-config__cta-btn-text']").textContent();

    // if (inStock == "Out of Stock") {
    //     console.log(itemName + itemColor + "Out of stock");
    // }
    // else {
    //     const priceItem = await page.locator("//span[@class='js-buy-config-price buy-config-price']//span[@class='sales']").textContent();
    //     console.log(itemName + itemColor + + priceItem);
    // }
    // console.log("-------------------------------\n");
    const priceItem = await page.locator("//span[@class='js-buy-config-price buy-config-price']//span[@class='sales']").innerText();
    console.log(itemName + itemColor + + priceItem);

    await browser.close();
});



// Pause for 10 seconds, to see what's going on.
// await page.waitForTimeout(1000);

// try {
//     await page.waitForSelector('#onetrust-accept-btn-handler', { timeout: 5000 });
//     await page.click('#onetrust-accept-btn-handler');
// } catch {
//     console.log('No accept cookies button found.');
// }
// await page.waitForTimeout(3000);
