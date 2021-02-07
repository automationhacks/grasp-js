const { expect } = require("chai")

describe('Test the internet', () => {
    it('Verify header text', () => {
       browser.url('/') 
       let text = $('.heading').getText()

       console.log(text)
       expect(text).to.equal('Welcome to the-internet')
    })

    it('Verify footer text', () => {
       browser.url('/') 
       let text = $('#page-footer').getText()

       console.log(text)
       expect(text).to.contain('Elemental Selenium')
    })

})