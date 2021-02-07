const hoverPage = require('../pageobjects/hover.page')

describe('Test hovers', () => {
    it('should hover on first image', () => {
        browser.url(`${browser.options.baseUrl}hovers`)

        let imageIndex = 3
        hoverPage.hoverOnFigure(imageIndex)

        let text = hoverPage.getFigureDetailsText(imageIndex)
        expect(text).to.be.equal('name: user1')
        browser.pause(2000)
    })
})