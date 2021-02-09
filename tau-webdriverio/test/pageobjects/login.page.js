const Page = require('./page');

class LoginPage extends Page {
    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('button[type="submit"]') }
    get txtLoggedInMsg() { return $('#flash-messages div')}

    login(username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }

    open() {
        return super.open('login');
    }

    getLoginSuccessMsg() {
        return this.txtLoggedInMsg.getText()
    }
}

module.exports = new LoginPage();
