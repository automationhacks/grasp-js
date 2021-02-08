const Page = require('../pageobjects/page')

class AlertsPage extends Page {
    javascriptAlertButton(index) { return $(`.example li:nth-child(${index}) button`)}
    get resultText() { return $('#result').getText()}

    clickJsAlertButton(index) {
        this.javascriptAlertButton(index).waitForDisplayed()
        this.javascriptAlertButton(index).click()
    }

}
 
module.exports = new AlertsPage()