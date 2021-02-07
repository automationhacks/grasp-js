const Page = require('../pageobjects/page')

class KeyPressesPage extends Page {
    get target() { return $('#target')}
    get result() { return $('#result')}

    clickTarget() {
        this.target.waitForDisplayed()
        this.target.click()
    }

    sendKeysToTarget(text) {
        this.target.keys(text)
    }

    getResultText() {
        this.result.waitForDisplayed()
        return this.result.getText()
    }
}

module.exports = new KeyPressesPage()