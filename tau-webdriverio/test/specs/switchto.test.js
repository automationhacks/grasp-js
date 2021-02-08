const windowsPage = require("../pageobjects/windows.page")
const iframePage = require("../pageobjects/iframe.page")

describe("Test switch window tabs and iframe", () => {

    it("should open new window", () => {
        let baseUrl = browser.options.baseUrl
        browser.url(`${baseUrl}windows`)
        windowsPage.clickHere()

        browser.switchWindow(`${baseUrl}windows/new`)
        expect(windowsPage.getHeaderText()).to.be.equal("New Window")
    })

    it("should be able to enter text in iframe", () => {
        let baseUrl = browser.options.baseUrl
        browser.url(`${baseUrl}iframe`)
        iframePage.h3Header.waitForDisplayed()
        browser.switchToFrame(iframePage.iframe)

        let textToType = "Hello world! WDIO and JS are fantastic!"
        iframePage.sendTextToIFrame(textToType)
        expect(iframePage.getIframeText()).to.contain(textToType)
    })

})