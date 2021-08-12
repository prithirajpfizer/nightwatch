module.exports = {
    "@tags" : "global_test",
    "Verify URL for all the pages of pfizer.com" : function(browser){
        const URLS = require('./testURL.json');
        var count = 0;

        URLS.forEach(urlLink => {  
            browser.windowMaximize('current');      
            browser.url(urlLink.url);       
            browser.waitForElementVisible('body', 1000);
            browser.pause(3 * 1000);
            browser.resizeWindow(1200, 3000);
            browser.saveScreenshot('tests_output/'+ urlLink.name +'.png');
        });
        browser.end();
    }
}