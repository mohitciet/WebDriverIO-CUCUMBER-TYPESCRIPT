
import {LoginPage} from '../pages/login.page';
const loginPage = new LoginPage();
import {Config} from '../config';
import {Constants} from '../constants';
import { assert } from 'chai';

describe('login page feature test', function(){
    it('verify login page title', function(){
        browser.url('/')
        browser.maximizeWindow()
        const title = loginPage.getPageTitle()
        console.log('login page title is :', title);
        assert.equal(Constants.LOGIN_PAGE_TITLE, title, 'title is not found')
        browser.pause(5000)
    })
    it('verify sign up link', function(){
       assert.equal(true, loginPage.isSignUpLinkExist(), 'sign up link is not present')
       browser.pause(5000)
    })
    it('verify login', function(){
        //loginPage.doLogin('naveenanimation30@gmail.com', 'Test@1234')
        loginPage.doLogin(Config.username, Config.password)
        browser.pause(5000)
     })
})