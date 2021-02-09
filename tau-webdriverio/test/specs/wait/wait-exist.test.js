const addRemovePage = require('../../pageobjects/add-remove.page')

describe('wait exists tests', () => {
    it('should wait for element to exist', () => {
        browser.url(`${browser.options.baseUrl}add_remove_elements/`)
        addRemovePage.clickAddElement()
        addRemovePage.getDeleteButtonAt(1).waitForExist(1000)

        expect(addRemovePage.isDeleteButtonExisting(1)).to.be.equal(true)
    })

    it('should wait for element to not exist', () => {
        browser.url(`${browser.options.baseUrl}add_remove_elements/`)
        addRemovePage.clickAddElement()
        addRemovePage.clickDeleteButtonAt(1)
        browser.pause(5000)

        addRemovePage.getDeleteButtonAt(1).waitForExist({reverse: true})
        expect(addRemovePage.isDeleteButtonExisting(1)).to.be.equal(false)
    })
})