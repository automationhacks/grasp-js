const Page = require("../pageobjects/page")

class WindowsPage extends Page {
    get clickHereLink() { return $(".example a") }
    clickHere() {
        this.clickHereLink.click()
    }

    get headerText() { return $(".example h3") }
    getHeaderText() {
        return this.headerText.getText()
    }

}

module.exports = new WindowsPage()