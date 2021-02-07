const internetPage = require('../pageobjects/internet.page')

describe('Test the internet', () => {
   it('Header text should say welcome', () => {
      expect(internetPage.pageHeader.isExisting()).to.be.true
      expect(internetPage.pageHeader.getText()).to.equal('Welcome to the-internet')
   })

   it('Link texts on home should contain', () => {
      let linkTexts = internetPage.getLiText()
      expect(linkTexts).to.be.an('array').that.include('Entry Ad')
      expect(internetPage.getSpecificElementTextByIndex(3)).to.contain('Basic Auth')
   })

   it('Is footer displayed', () => {
      expect(internetPage.pageFooter.isDisplayed()).to.be.true
   })

   it('Is footer in viewport?', () => {
      expect(internetPage.pageFooter.isDisplayedInViewport()).to.be.false
   })

   it('Is sub header enabled?', () => {
      expect(internetPage.pageSubHeading.isEnabled()).to.be.true
   })

   it('click Element', () => {
      internetPage.clickOnLink()
   })

})