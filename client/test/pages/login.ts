import { expect } from 'chai';
import { getElement } from '../commonActions';

class Login {
    open(url: string) {
        browser.url(url);
    }

    checkTitle(expectedTitle: string) {
        const title = browser.getTitle();
        expect(title).to.be.equal(expectedTitle);
    }

    setValues(username: string, password: string) {
        getElement('#username').setValue(username);
        getElement('#password').setValue(password);
    }

    login() {
        getElement('#login').click();
    }

    afterLogin(action: string, expectedUrl: string) {
        if(action === "login") {
            browser.waitForExist('#logout');
        } else {
            browser.waitForExist('#username');
        }
        const url = browser.getUrl();
        expect(url).to.be.equal(expectedUrl);
    }

    logout() {
        getElement('#logout').click();
    }

}

const LoginPage = new Login();
export default LoginPage