const dynamicControlsPage = require('../pageobjects/dynamic-controls.page')

describe('Wait tests', () => {
    it('should wait for enabled', () => {
        browser.url(`${browser.options.baseUrl}dynamic_controls`)
        dynamicControlsPage.clickEnabledButton()
        dynamicControlsPage.waitForButtonToEnable()

        expect(dynamicControlsPage.enabledTextBox.isEnabled()).to.be.equal(true)
        expect(dynamicControlsPage.enabledConfirmationText).to.be.equal("It's enabled!")
    })

    // Note: This test depends on above test being executed
    it.skip('should wait for input field to be disabled', () => {
        dynamicControlsPage.clickEnabledButton()
        dynamicControlsPage.waitWhileButtonIsDisplayed()

        expect(dynamicControlsPage.enabledTextBox.isEnabled()).to.be.equal(false)
    })
})