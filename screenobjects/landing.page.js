/**
 * Page object representing the Landing page with methods to interact with elements on the page.
 */
class LandingPage {

    get acceptAllCookiesButton() {
        return cy.get('[data-click-id="hgr-cookie_consent-accept_all_btn"]');
    }
}

module.exports = new LandingPage();