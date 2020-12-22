import { browser, element, by, WebElement } from "protractor";
import { LOGINPAGE } from "../pageobjects/login-page";
import { ELEMENTSUTILITY } from "../utility/elementsutil"
import { UTILITY } from "../utility/util"

let property = require("F:\\AutomationTesting\\ProtractorTest\\config\\property.ts");
let loginpage = new LOGINPAGE();
let utility = new UTILITY();

//Main Suite to test overall login functionality of application
describe('Verify login functionality', function () {

    //Annotation to ensure that code inside this block is always executed before running any test.
    beforeEach(async function () {
        await browser.waitForAngularEnabled();
        await browser.get(property.appURL);
    })

    //First test to validate login functionality using correct credentials.
    it('Verify login using correct credentials', async function () {
        await loginpage.validLoginTest();
    })

    //Second test to validate login functionality with no credentials.
    it('Verify login using no credentials', async function () {
        await loginpage.invalidLoginTest();
    })

    //Third test to validate login functionality using incorrect credentials.
    it('Verify login using incorrect credentials', async function () {
        await loginpage.noCredLoginTest();
    })
})