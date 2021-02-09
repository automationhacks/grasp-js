const dynamicControlsPage = require('../../pageobjects/dynamic-controls.page')

describe('wait until tests', () => {
    it('should wait until the text changes', () => {
        browser.url(`${browser.options.baseUrl}dynamic_controls`)
        dynamicControlsPage.clickRemoveButton()

        dynamicControlsPage.waitTillButtonTextChanges()
        expect(dynamicControlsPage.removeOrAddButton.getText()).to.be.equal('Add')
    })
})