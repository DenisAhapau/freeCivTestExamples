/**
 * Created by Denis Ahapau on 11/14/2016.
 */
exports.act = {

    consoleLogTimestamp : function(text) {
        var currentDate = '[' + new Date().toUTCString() + '] ';
        console.log(currentDate+text);
    },

    waitToBeDisplayed: function(selector) {
      return driver.wait(until.elementLocated(selector))
        .then(function() {
          return driver.findElement(selector).isDisplayed().catch(function(e){
            screenShots.takeScreenShotNow('error','error');
            fail(e);
          })
        .then(function() {
          return driver.findElement(selector).isEnabled().catch(function(e){
            screenShots.takeScreenShotNow('error','error');
            fail(e);
          });
        });
      });
    },

    clickOnElement: function(selector) {
        return act.waitToBeDisplayed(selector)
            .then(function (bool) {
                return driver.findElement(selector).click();
            })
    },

    clearThenSendKeys: function(inputSelector, value) {
        return act.waitToBeDisplayed(inputSelector)
            .then(function () {
                driver.findElement(inputSelector).clear();
                driver.findElement(inputSelector).sendKeys(value);
            })
    },

    getElementAttribute: function(selector, whichAttribute) {
        return act.waitToBeDisplayed(selector)
            .then(function () {
                return driver.findElement(selector).getAttribute(whichAttribute)
            })
    },

    openTestPage: function(selector){
        return driver.get(selector);
    },

    getElementText: function (selector) {
        return act.waitToBeDisplayed(selector)
            .then(function () {
            return driver.findElement(selector).getText()
            })
    },

    getPageTitleNow: function () {
            return driver.getTitle()
    }

};
