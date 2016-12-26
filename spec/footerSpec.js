footerObject = require('../pages/footerLinks.js');
helpersActionsObject = require('../spec/helpers/basic-actions.js');
footer = footerObject.footerBoard;
act = helpersActionsObject.act;
screenShots = require('../spec/helpers/screenshot.js');
var fs = require ('fs');

describe('Test for footer links', function() {

    // // Open the bash.im (freeCiv) website in the browser before each test is run
    beforeAll(function(done) {
        act.openTestPage(footer.urlAddress).then(function(){
          done();
        });
    });

    it('Should redirect to Data protection on click', function(done) {
        act.clickOnElement(footer.dataProtectionFooter);
        act.getElementText(footer.pageTitle).then(function(text) {
            expect(text).toBe('Data protection');
            done();
        });
    });

    it('Should contain correct Link and target in Impressum link', function(done) {
        act.getElementAttribute(footer.impressumFooter,'href').then(function(href){
          expect(href).toBe('https://www.arago.co/impressum');
          driver.findElement(footer.impressumFooter).getAttribute('target').then(function(target){
            expect(target).toBe('_blank');
            done();
        });
      });
    });

});
