
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

// test("draw button should disiplay robots to select", async () => {
//     await driver.findElement(By.id('draw')).click()

//     await driver.sleep(3000)

//     const botCard = await driver.findElement(By.xpath('(//div/div[contains(@class, "bot-card")])[1]'))

//     const displayed = botCard.isDisplayed()
//     expect(displayed).toBeTruthy()
// })

// test('clicking draw displays choices', async () => {
//     await drawFive(driver)
//     const choices = await driver.findElement(By.id('choices'))
//     const displayed = await choices.isDisplayed()
//     await driver.sleep(3000)
//     expect(displayed).toBe(true)
    
// })

// test('added robot to duo', async () => {
//     await chooseBot(driver)
//     const duo = await driver.findElement(By.id('player-duo'))
//     const displayed = await duo.isDisplayed()
//     await driver.sleep(3000)
//     expect(displayed).toBe(true)
// })