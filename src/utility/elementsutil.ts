import { browser, element, by, protractor, WebElementPromise, ElementFinder, WebElement } from 'protractor'

export class ELEMENTSUTILITY {
    
    //Method to find a webelement from DOM at runtime on the basis of defined locator type.
    locateElement(locator: string): WebElement{
        
        let  xpathValue = locator.split("_")[0];
        let sampleElement: any; //Need to enable this line once constructor is removed

        if (locator.endsWith('_xpath')) {
            sampleElement = element(by.xpath(xpathValue));//.getWebElement();
            console.log(sampleElement);
            //return sampleElement;
        }
        else if (locator.endsWith('_css')) {
            sampleElement = element(by.css(locator)).getWebElement();;
            //return sampleElement;
        }
        else if (locator.endsWith('id')) {
            sampleElement = element(by.id(locator)).getWebElement();;
            //return sampleElement;
        }
        else if (locator.endsWith('_classname')) {
            sampleElement = element(by.className(locator)).getWebElement();;
            //return sampleElement;
        }
        else if (locator.endsWith('_link')) {
            sampleElement = element(by.linkText(locator)).getWebElement();;
            //return sampleElement;
        }
        else if (locator.endsWith('_name')) {
            sampleElement = element(by.name(locator)).getWebElement();;
            //return sampleElement;
        }
        else if (locator.endsWith('_partial')) {
            sampleElement = element(by.partialLinkText(locator)).getWebElement();;
            //return sampleElement;
        }
        else if (locator.endsWith('_options')) {
            sampleElement = element(by.options(locator)).getWebElement();;
            //return sampleElement;
        }
        else {
            console.log('Invalid locator defined!!!');
        }
        return sampleElement; //Started working after adding constructor else error was used before assigning.
    }

    //Enter text in a textbox
    enterText(locator: string, data: string) {
        this.locateElement(locator).sendKeys(data);
        // element(locator).sendKeys(data);
    }

    //Click on a button
    click(locator: string) {
        this.locateElement(locator).click();
        //this.locateElement(locator)?.click();
    }

    //Find element based on given locator type
    // function locateElement11(locator: string) {
    // sampleElement: WebElement;

    // if (locator.endsWith('_xpath')) {
    //     let sampleElement = element(by.xpath(locator)).getWebElement();
    // }
    // else if (locator.endsWith('_css')) {
    //     let sampleElement = element(by.css(locator));
    // }
    // else if (locator.endsWith('id')) {
    //     let sampleElement = element(by.id(locator));
    // }
    // else if (locator.endsWith('_classname')) {
    //     let sampleElement = element(by.className(locator));
    // }
    // else if (locator.endsWith('_link')) {
    //     let sampleElement = element(by.linkText(locator));
    // }
    // else if (locator.endsWith('_name')) {
    //     let sampleElement = element(by.name(locator));
    // }
    // else if (locator.endsWith('_partial')) {
    //     let sampleElement = element(by.partialLinkText(locator));
    // }
    // else if (locator.endsWith('_options')) {
    //     let sampleElement = element(by.options(locator));
    // }
    // else {
    //     console.log('Invalid locator defined!!!');
    // }
}