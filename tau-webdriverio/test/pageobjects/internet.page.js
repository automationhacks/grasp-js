const Page = require('./page');

class InternetPage extends Page {
    get pageHeader() { return $('h1.heading')}
    get pageSubHeading() { return $('h2')}
    get pageFooter() { return $('#page-footer')}
    // $ = findElement, $$ = findElements
    get parentLinkContainer() { return $('ul')}
    get childLinks() { return this.parentLinkContainer.$$('li')}
    specificChildElement(index) { return this.parentLinkContainer.$(`li:nth-child(${index})`)}

    getLiText() {
       this.childLinks.filter((element) => {
           console.log(element.getText())
       }) 
    }

    getSpecificElementTextByIndex(index) {
        return this.specificChildElement(index).getText()
    }
}

// so that class is accessible by tests
module.exports = new InternetPage()