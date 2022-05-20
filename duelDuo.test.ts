
import { Builder, Capabilities, By } from "selenium-webdriver"

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

test('clicking draw displays choices', async () => {
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    await driver.sleep(3000)
    expect(displayed).toBe(true)
    
})

test('added to due', async () => {
    const duo = await driver.findElement(By.id('player-duo'))
    const displayed = await duo.isDisplayed()
    await driver.sleep(3000)
    expect(displayed).toBe(true)
})