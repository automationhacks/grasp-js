const dropDownPage = require('../pageobjects/dropdown.page')

describe('Drop down Test', () => {
    it('should select option', () => {
        browser.url(`${browser.options.baseUrl}/dropdown`)

        dropDownPage.clickOnDropDownMenu().clickOnDropDownOption()
        const isOptionSelected = dropDownPage.dropDownMenuOption.isSelected()
        expect(isOptionSelected).to.be.equal(true)
    })
})