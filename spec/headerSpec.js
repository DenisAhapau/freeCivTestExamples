headerObject = require('../pages/headerLinks.js');
helpersActionsObject = require('../spec/helpers/basic-actions.js');
header = headerObject.headerBoard;
act = helpersActionsObject.act;
screenShots = require('../spec/helpers/screenshot.js');
var fs = require ('fs');

describe('Test for header links', function() {

    // // Open the bash.im (freeCiv) website in the browser before each test is run
    beforeAll(function(done) {
        act.openTestPage(header.urlAddress).then(function(){
          done();
        });
    });

    afterEach(function () {
        // var currentSpec = jasmine.getEnv().currentSpec;
        // passed = currentSpec.results().passed();
        // if(!currentSpec.results().passed()){
        //     var browserName = capabilities.caps_.browserName;
        //     filename = browserName + 'fail ' + passFail + '-' + currentSpec.description;
        //     screenShots.takeScreenShotNow(filename,'failedTests');
        // }
    });



    it('Should be on the home page', function(done) {
          act.getPageTitleNow().then(function(title) {
            expect(title).toBe('HIRO™ FreeCiv');
            done();
      });
    });

    it('Should redirect to Battle-Grid on click', function(done) {
        act.clickOnElement(header.battleGridHeader);
        act.getElementText(header.pageTitle).then(function(text) {
            expect(text).toBe('Battle Grid');
            done();
        });
    });

    it('Should redirect to Ladder on click on logo', function(done) {
        act.clickOnElement(header.logoBlock);
        act.getElementText(header.pageTitle).then(function(text) {
            expect(text).toBe('Ladder');
            done();
        });
    });

    it('Should redirect to Map View on click', function(done) {
        act.clickOnElement(header.mapViewHeader);
        act.getElementText(header.pageTitle).then(function(text) {
            expect(text).toBe('Maps');
            done();
        });
    });

    it('Should redirect to Rules on click', function(done) {
        act.clickOnElement(header.rulesHeader);
        act.getElementText(header.pageTitle).then(function(text) {
            expect(text).toBe('Rules');
            done();
        });
    });

    it('Should redirect to Ladder on click', function(done) {
        act.clickOnElement(header.ladderHeader);
        act.getElementText(header.pageTitle).then(function(text) {
            expect(text).toBe('Ladder');
            done();
        });
    });

    it('Should redirect to Train on click', function(done) {
        act.clickOnElement(header.trainHeader);
        act.getPageTitleNow().then(function(title) {
            expect(title).toBe('Train - HIRO™ FreeCiv');
            done();
        });
    });

    it('Should redirect to About on click', function(done) {
        act.clickOnElement(header.aboutHeader);
        act.getPageTitleNow().then(function(title) {
            expect(title).toBe('About - HIRO™ FreeCiv');
            done();
        });
    });

    it('Should open DotMenu', function(done) {
        act.clickOnElement(header.nineDotMenu);
        act.getElementAttribute(header.nineDotMenu,'aria-expanded').then(function(expand){
          expect(expand).toBe('true');
          done();
        });
    });

    it('Should contain correct Links in DotMenu aragoIDDotMenu', function(done) {
        act.getElementAttribute(header.aragoIDDotMenu,'href').then(function(link){
          expect(link).toBe('https://id.arago.co/');
            done();
        });
    });

    it('Should contain correct Links in DotMenu communityDotMenu', function(done) {
        act.getElementAttribute(header.communityDotMenu,'href').then(function(link){
          expect(link).toBe('https://community.hiro.arago.co/');
          done();
        });
    });

    it('Should contain correct Links in DotMenu portalDotMenu', function(done) {
        act.getElementAttribute(header.portalDotMenu,'href').then(function(link){
          expect(link).toBe('https://hiro.arago.co/');
          done();
        });
    });

    it('Should contain correct Links in DotMenu docsDotMenu', function(done) {
        act.getElementAttribute(header.docsDotMenu,'href').then(function(link){
          expect(link).toBe('https://docs.hiro.arago.co/');
          done();
        });
    });

    it('Should contain correct Links in DotMenu trainingDotMenu', function(done) {
        act.getElementAttribute(header.trainingDotMenu,'href').then(function(link){
          expect(link).toBe('http://training.hiro.arago.co/');
          done();
        });
    });

    it('Should contain correct Links in DotMenu supportDotMenu', function(done) {
        act.getElementAttribute(header.supportDotMenu,'href').then(function(link){
          expect(link).toBe('http://support.hiro.arago.co/');
          done();
        });
    });

});
