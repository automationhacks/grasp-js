const Page = require('./page');

class InternetPage extends Page {
    get pageHeader() { return $('h1.heading') }
    get pageSubHeading() { return $('h2') }
    get pageFooter() { return $('#page-footer') }
    // $ = findElement, $$ = findElements
    get parentLinkContainer() { return $('ul') }
    get childLinks() { return this.parentLinkContainer.$$('li') }
    specificChildElement(index) { return this.parentLinkContainer.$(`li:nth-child(${index})`) }

    getLiText() {
        const linkTexts = []
        this.childLinks.filter((element) => {
            linkTexts.push(element.getText())
        })
        return linkTexts
    }

    getSpecificElementTextByIndex(index) {
        return this.specificChildElement(index).getText()
    }

    get firstLink() { return $('ul li:nth-child(1) a')}

    clickOnLink() {
        if (this.firstLink.isDisplayed()) {
            this.firstLink.click()
        }

        browser.pause(5000)
    }
}

// so that class is accessible by tests
module.exports = new InternetPage()