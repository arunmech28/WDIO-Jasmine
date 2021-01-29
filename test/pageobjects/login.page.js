import Page from './page';


/**
 *
 *
 * @class LoginPage
 * @extends {Page}
 */
class LoginPage extends Page {
    get inputUsername() {
        return $('#username');
    }
    get inputPassword() {
        return $('#password');
    }
    get btnSubmit() {
        return $('button[type="submit"]');
    }
    /**
     *
     *
     * @param {*} username
     * @param {*} password
     * @memberof LoginPage
     */
    login(username, password) {
        console.log(username, password);
        // this.inputUsername.setValue(username);
        // this.inputPassword.setValue(password);
        // this.btnSubmit.click();
    }

    /**
    *
    *
    * @return {*}
    * @memberof LoginPage
    */
    open() {
        return super.open('login');
    }
}

export const login = LoginPage.prototype.login;
