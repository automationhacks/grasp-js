const Page = require('../pageobjects/page')

class DragAndDropPage extends Page {
    get draggable() { return $('#draggable') }
    get droppable() { return $('#droppable') }
    get droppableParagraph() { return $('#droppable p') }

    dragAndDropControls() {
        this.draggable.dragAndDrop(this.droppable)
    }

    getDroppableParagraphText() {
        this.droppableParagraph.waitForDisplayed()
        return this.droppableParagraph.getText()
    }
}

module.exports = new DragAndDropPage()