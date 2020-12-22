var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  framework: 'jasmine',
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  
  //specs: ['src/test.ts'],
  specs: ['F:\\AutomationTesting\\ProtractorTest\\src\\pagetests\\login-test.ts'],
  
    capabilities: {
      browserName: 'chrome'
    },

    //Method to execute required code when test starts running
    onPrepare() {
      browser.manage().window().maximize(),
        require('ts-node').register({
          project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file 
        });

      jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: 'reports/screenshots'
      }).getJasmine2Reporter());
    },

    //Method to execute required code when test stops running
    onComplete() {
    }
  }