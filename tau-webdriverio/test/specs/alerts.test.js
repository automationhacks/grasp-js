const alertsPage = require('../pageobjects/alerts.page')

/**
 * Demos wdio API 
 * https://webdriver.io/docs/api/webdriver.html#dismissalert
 */
describe('Test JS alerts', () => {
    it('should get text of alert', () => {
        browser.url(`${browser.options.baseUrl}javascript_alerts`)
        alertsPage.clickJsAlertButton(1)

        expect(browser.getAlertText()).to.be.equal('I am a JS Alert')
    })

    it('should accept alert', () => {
        browser.url(`${browser.options.baseUrl}javascript_alerts`)
        alertsPage.clickJsAlertButton(2)
        browser.acceptAlert()

        expect(alertsPage.resultText).to.be.equal('You clicked: Ok')
    })

    it('should dismiss alert', () => {
        browser.url(`${browser.options.baseUrl}javascript_alerts`)
        alertsPage.clickJsAlertButton(2)
        browser.dismissAlert()

        expect(alertsPage.resultText).to.be.equal('You clicked: Cancel')
    })

    it('should send text to alert', () => {
        browser.url(`${browser.options.baseUrl}javascript_alerts`)
        alertsPage.clickJsAlertButton(3)
        let inputText = "Hello world"
        browser.sendAlertText(inputText)
        browser.acceptAlert()

        expect(alertsPage.resultText).to.contain(inputText)
    })

})