const Page = require('../pageobjects/page')

class DynamicControlsPage extends Page {
    get enabledButton() { return $('#input-example button') }
    get inputEnabledTextBox() { return $('#input-example input') }
    get enabledConfirmationText() { return $('#input-example #message').getText() }
    get removeOrAddButton() { return $('#checkbox-example button') }

    clickEnabledButton() {
        this.enabledButton.click()
    }

    clickRemoveButton() {
        this.removeOrAddButton.click()
    }

    waitTillButtonTextChanges() {
        browser.waitUntil(() => {
            return this.removeOrAddButton.getText() === 'Add'
        }, 6000, 'expect button text to change')
    }

    waitForButtonToEnable() {
        this.inputEnabledTextBox.waitForEnabled(4000)
    }

    waitWhileButtonIsDisplayed() {
        // wait for control to be disabled, since reverse = true is passed
        this.inputEnabledTextBox.waitForEnabled(4000, true)
    }
}

module.exports = new DynamicControlsPage()