jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

webdriver = require('selenium-webdriver');
By = webdriver.By;
until = webdriver.until;
driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
driver.manage().window().maximize();
// driver.manage().window().setSize(1920, 974);

afterAll(function(done) {
    driver.quit().then(done);
});
