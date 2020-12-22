import { browser, element, by } from "protractor"
import { LOGINPAGE } from "../pageobjects/login-page"
import { UTILITY } from "../utility/util";

let property = require("config\property.ts");
let loginpage = new LOGINPAGE();
let utility = new UTILITY();
let logintestdata = require("src\testdata\login-data.ts");
var using = require('jasmine-data-provider');

//Main Suite to test overall login functionality of application
describe('Verify login functionality', function () {

    //Annotation to ensure that code inside this block is always executed before running any test.
    beforeEach(function () {
        browser.waitForAngularEnabled();
        browser.get(property.appURL);
    })

    //First test to validate login functionality using correct credentials.
    using(logintestdata.twitterInfo, function (data, description) {

        it('Verify login using correct credentials' + description, function () {
            loginpage.doLogin();
            loginpage.waitForDashboard();
            loginpage.doLogOut();
            utility.verifyAndCloseAlert();
            loginpage.doAssertionOnLoginSuccess();
        }),


        it("Verify login using correct credentials " + description, function() {
			expect(element(by.cssContainingText('.name', description)).isPresent()).toBeTruthy(
				'Employee not found'
				);
			expect(element(by.css('a[href="http://www.twitter.com/' + data.handle + '"]')).isPresent()).toBeTruthy(
				'Employee does not have twitter linked'
				);
			element(by.css('a[href="http://www.twitter.com/' + data.handle + '"]')).click();
			expect(browser.getTitle()).toEqual(description + " (@" + data.handle + ") | Twitter"); 
		})
    })

    // //Second test to validate login functionality with no credentials.
    // it('Verify login using no credentials', function () {

    // }),

    // //Third test to validate login functionality using incorrect credentials.
    // it('Verify login using incorrect credentials', function () {

    // })
})