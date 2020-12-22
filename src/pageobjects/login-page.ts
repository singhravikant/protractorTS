import { browser, element, by, protractor, WebElement } from 'protractor'
import { ELEMENTSUTILITY } from '../utility/elementsutil'

export class LOGINPAGE {
	logintestdata = require("F:\\AutomationTesting\\ProtractorTest\\src\\testdata\\login-data.ts");
	elementsutility = new ELEMENTSUTILITY();

	// //Defining all the page elements
	emailid_xpath = element(by.xpath('//input[@type="text"]'));
	password_xpath = element(by.xpath('//input[@type="password"]'));
	loginbutton_xpath = element(by.xpath('//button[@type="submit"]'));

	//Function to perform actual user login with valid credentials.
	validLoginTest() {
		try {
			this.emailid_xpath.sendKeys(this.logintestdata.logintest[0].validtest.username);
			this.password_xpath.sendKeys(this.logintestdata.logintest[0].validtest.password);
			this.loginbutton_xpath.click();
		}
		catch {
			console.log();
		}
	}

	//Function to perform actual user login with invalid credentials.
	invalidLoginTest() {
		try {
			this.emailid_xpath.sendKeys(this.logintestdata.logintest[1].invalidtest.username);
			this.password_xpath.sendKeys(this.logintestdata.logintest[1].invalidtest.password);
			this.loginbutton_xpath.click();
		}
		catch
		{
			console.log();
		}
	}

	//Function to perform actual user login with no credentials.
	noCredLoginTest() {
		try {
			this.emailid_xpath.sendKeys(this.logintestdata.logintest[2].nocredtest.username);
			this.password_xpath.sendKeys(this.logintestdata.logintest[2].nocredtest.password);
			this.loginbutton_xpath.click();
		}
		catch
		{
			console.log();
		}
	}

	doLogOut() {
		// this.profileoptions.click();
		// this.signoutlink.click();
	}

	async doAssertionOnLoginSuccess() {
		expect(await browser.getTitle()).toEqual('Test title');
	}
}