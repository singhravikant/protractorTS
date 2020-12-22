import { browser, element, by, protractor, WebElementPromise, ElementFinder, WebElement } from 'protractor'

export class UTILITY {

    //Function to perform actual user login.
    verifyAndCloseAlert() {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 5000, "Alert is not present");

        let alert = browser.switchTo().alert();
        alert.accept();
    };

    waitForDashboard() {
        browser.sleep(5000);
    };
}