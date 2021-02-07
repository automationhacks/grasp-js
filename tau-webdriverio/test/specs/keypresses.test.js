const keyPressesPage = require('../pageobjects/keypresses.page')

describe('Verify keyboard keypresses', () => {
    it('Should send keyboard value', () => {
        // Can use wdio keys command
        // https://webdriver.io/docs/api/browser/keys.html
        // Key's codepoint and normalized key value can be seen
        // https://w3c.github.io/webdriver/#keyboard-actions

        browser.url(`${browser.options.baseUrl}key_presses`)
        keyPressesPage.clickTarget()
        keyPressesPage.sendKeysToTarget("Backspace")
        const result = keyPressesPage.getResultText()
        expect(result).to.contain("BACK_SPACE")
    })
})