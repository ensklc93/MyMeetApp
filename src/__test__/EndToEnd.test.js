import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {

  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch(/* 
        {
            headless: false,
            slowMo: 250, // slow down by 250ms,
            timeout: 0 // 
          } */);
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$(`.event .details`);
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$(`.event .details`);
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$(`.event .details`);
    expect(eventDetails).toBeNull();
  });

});


describe('filter events by city', () => {

  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch(/* 
        {
            headless: false,
            slowMo: 250, // slow down by 250ms,
            timeout: 0 //
          } );*/ )
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
  });

  afterAll(() => {
    browser.close();
  });

  test('User can see all events upon opening the app', async () => {
    const eventItems = await page.$$('.event');
  expect(eventItems.length).toBeGreaterThan(0); 
  });

  test('User receive a list of cities (suggestions) while typing a city in the city textbox', async () => {
    await page.type('.city', 'Berlin')

    const suggestions = await page.$$eval('.suggestions li', items => items.map(item => item.textContent));

    expect(suggestions).toContain('Berlin, Germany');
    expect(suggestions).toContain('See all cities');

  });

  test('User can select a specific city from the suggested list and receive a list of upcoming events of that city', async () => {
    await page.type('.city', 'Berlin');
    await page.click('.suggestions li:nth-child(1)'); // Select the first suggestion (Berlin, Germany)
  
    const eventItems = await page.$$('.event');

    eventItems.forEach(async (item) => {
      const location = await item.$eval('p:nth-of-type(2)', el => el.textContent);
      expect(location).toContain('Berlin, Germany'); // Ensures events are from Berlin
    });

  });

});