describe('Try debug feature', () => {
    it('should wait and keep session active during debug', () => {
        browser.url('/')
        browser.debug()
    })
})