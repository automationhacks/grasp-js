const internetPage = require('../pageobjects/internet.page')

describe("Test scroll", () => {
    it("should scroll to footer", () => {
        browser.url('/')
        internetPage.pageHeader.waitForDisplayed()
        internetPage.scrollToPageFooter()
        browser.pause(5000)

        expect(internetPage.pageFooter.isDisplayedInViewport()).to.be.true
    })
})