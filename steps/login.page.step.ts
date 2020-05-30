import {LoginPage} from '../pages/login.page';
const loginPage = new LoginPage();
import {Config} from '../config';
import {Constants} from '../constants';
import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';

Given('the login screen is shown', (): void => {
    browser.url('/')
    browser.maximizeWindow()
    const title = loginPage.getPageTitle()
    console.log('login page title is :', title);
    assert.equal(Constants.LOGIN_PAGE_TITLE, title, 'title is not found')
    browser.pause(5000)
});


When('I log in', (): void => {
    assert.equal(true, loginPage.isSignUpLinkExist(), 'sign up link is not present')
    browser.pause(5000)
});

Then('a confirmation message should be shown', (): void => {
    loginPage.doLogin(Config.username, Config.password)
        browser.pause(5000)
});