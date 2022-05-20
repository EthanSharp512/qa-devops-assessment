
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {drawFive, chooseBot} = require('/public/index.js');

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