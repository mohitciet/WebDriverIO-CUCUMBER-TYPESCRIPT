//const elementUtil = require('../util/elementUtil');
//const constants = require('../constants');
import {Constants} from '../constants';

import {ElememtUtil} from '../util/elementUtil';
const elementUtil = new ElememtUtil();


class LoginPage {
    //page locators:
    get username() { return $('#username') }
    get password() { return $('#password') }
    get loginBtn() { return $('#loginBtn') }
    get signUpLink() { return $('=Sign up') }


    //page actions:
    public getPageTitle(): string {
        console.log("PageTitleMohit:"+Constants.LOGIN_PAGE_TITLE)
        return elementUtil.doGetPageTitle(Constants.LOGIN_PAGE_TITLE)
    }
    public isSignUpLinkExist(): boolean {
        return elementUtil.doIsDisplayed(this.signUpLink)
    }
    public doLogin(emailID : string, pwd : string): void {
        elementUtil.doSetValue(this.username, emailID)
        elementUtil.doSetValue(this.password, pwd)
        elementUtil.doClick(this.loginBtn)
    }
}
//module.exports = new LoginPage()
export {LoginPage}