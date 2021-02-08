const Page = require('../pageobjects/page')

class DropDownPage extends Page {
    get dropDownMenu() { return $('#dropdown')}
    get dropDownMenuOption() { return $('#dropdown option:nth-child(3)')}

    clickOnDropDownMenu() {
        this.dropDownMenu.waitForDisplayed()
        this.dropDownMenu.click()
        return this
    }

    clickOnDropDownOption() {
        this.dropDownMenuOption.waitForDisplayed()
        this.dropDownMenuOption.click()
        return this
    }
}

module.exports = new DropDownPage()