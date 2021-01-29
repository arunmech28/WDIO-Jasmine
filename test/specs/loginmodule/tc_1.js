import { login } from '../../pageobjects/login.page';
import * as data from '../../data/loginmodule/tc_1.json';

describe('My Login application1111', () => {
    it('should login with valid credentials 1', () => {
        console.log('in it block1');
        browser.url('https://www.google.co.in/');
        login(data.username, data.password);
    });

    it('should login with valid credentials 2', () => {
        console.log('in it block2');
        browser.url('https://www.google.co.in/');
    });
});
