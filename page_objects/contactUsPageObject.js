module.exports = {
    url: "https://www.pfizer.com",
    elements: {
         testLinkDOM1: "#block-connectwithus > ul > li > div > a",
         testLinkOptionDropdown: "select[id='contact_us_support_inquiry']",
         testLinkOptionDropdownVal: "#contact_us_support_inquiry > option:nth-child(3)",
         testLinkSubmit: "#contact_us_support > div > section:nth-child(2) > form > a > input[type='submit']",
         testCountryDropdown: "select[id='edit-country']",
         testCountryDropdownVal: "#edit-country > option:nth-child(102)",
         testConfirmCheckbox: "#webform-submission-contact-us-block-content-10146-add-form > div.form-item.js-form-item.form-type-checkbox.js-form-type-checkbox.form-item-please-check.js-form-item-please-check.checkbox > label"
    },
    commands: ({
        selectFilter(selector, value){
            return this
                .click(selector)
                .click(value);
        },
        setFilterValue(selector, value){
            return this
                .setValue(selector, value);
        },
        setPause(timeInterval){
            return this
                .pause(timeInterval);
        },
        clickEvent(eventHandler){
            return this
                .click(eventHandler);
        }

    })
}