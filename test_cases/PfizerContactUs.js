module.exports = {
    "@tags" : "contact_us",
    "Verify Contact us page of pfizer.com" : function(browser){
      
        // performing test cases.
        browser.windowMaximize('current'); 

        // Using page object.
        const contactUsPageObj = browser.page.contactUsPageObject();

        contactUsPageObj
            .navigate()
            .setPause(1 * 1000)
            .clickEvent('@testLinkDOM1')
            .selectFilter('@testLinkOptionDropdown', '@testLinkOptionDropdownVal')
            .clickEvent('@testLinkSubmit')
            .setPause(3 * 1000)
            .setFilterValue('#edit-question-comment', 'Some test query and comments')
            .setFilterValue('#edit-first', 'Prithiraj')
            .setFilterValue('#edit-last', 'Roy')
            .setFilterValue('#edit-address-1', 'Some test address in here')
            .setFilterValue('#edit-e-mail-address', 'prithiraj.roy@pfizer.com')
            .selectFilter('@testCountryDropdown', '@testCountryDropdownVal')
            .clickEvent('@testConfirmCheckbox')

           
            browser.pause(3 * 1000)
            browser.waitForElementVisible('body', 1000);
            browser.resizeWindow(1200, 3000);
            browser.saveScreenshot('tests_output/contact_us.png')
            browser.click('#edit-actions-submit')
            browser.end();    

    }
}