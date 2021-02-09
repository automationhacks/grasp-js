const loginPage = require('../pageobjects/login.page')
const loginData = require('../data/login-data')

describe('Login test', () => {
    it('should login with valid username and password', () => {
        loginPage.open()
        loginPage.login(loginData.userName, loginData.password)

        expect(loginPage.getLoginSuccessMsg()).to.contain('You logged into a secure area!')
    })
})