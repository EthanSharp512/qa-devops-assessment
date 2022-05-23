
const {Builder, Capabilities, By} = require("selenium-webdriver")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("draw button should disiplay robots to select", async () => {
    await driver.findElement(By.id('draw')).click()

    await driver.sleep(3000)

    const botCard = await driver.findElement(By.xpath('(//div/div[contains(@class, "bot-card")])[1]'))

    const displayed = botCard.isDisplayed()
    expect(displayed).toBeTruthy()
})

test('clicking add to duo displays your duo header', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('(//div/div/button)')).click()

    await driver.sleep(3000)

    const yourDuo = await driver.findElement(By.id('your-duo-header'))
    
    const displayed = await yourDuo.isDisplayed()

    expect(displayed).toBeTruthy()
})