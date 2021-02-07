const { expect } = require("chai")
const internetPage = require('../pageobjects/internet.page')

describe('Test the internet', () => {
   it('Verify header text', () => {
      browser.url('/')

      expect(internetPage.pageHeader.getText()).to.equal('Welcome to the-internet')
      internetPage.getLiText()

      expect(internetPage.getSpecificElementTextByIndex(3)).to.contain('Basic Auth')
   })
})