const dragAndDropPage = require('../pageobjects/draganddrop.page')
describe('Drag and drop test', () => {
    it('should drag and drop', () => {
        browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
        dragAndDropPage.dragAndDropControls()

        expect(dragAndDropPage.getDroppableParagraphText()).to.be.equal('Dropped!')
    })
})