const Page = require('../pageobjects/page')
class AddRemovePage extends Page {

    get addElementButton() { return $('.example button') }

    getDeleteButtonAt(index) {
        return $(`.example #elements button:nth-child(${index})`)
    }

    clickAddElement() {
        this.addElementButton.click()
    }

    clickDeleteButtonAt(index) {
        this.getDeleteButtonAt(index).click()
    }

    isDeleteButtonExisting(index) {
        return this.getDeleteButtonAt(index).isExisting()
    }
}
module.exports = new AddRemovePage()