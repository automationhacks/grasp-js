const Page = require("../pageobjects/page")

class IframePage extends Page {
    get h3Header() { return $(".example h3")}
    get iframeBody() { return $("#tinymce")}
    get iframe() { return $("#mce_0_ifr")}

    sendTextToIFrame(text) {
        this.iframeBody.waitForDisplayed()
        this.iframeBody.clearValue()
        this.iframeBody.click()
        this.iframeBody.keys(text)
    }

    getIframeText() {
        return this.iframeBody.getText()
    }

}

module.exports = new IframePage()