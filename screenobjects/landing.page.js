class LandingPage {

    get acceptAllCookiesButton() {
        return cy.get('[data-click-id="hgr-cookie_consent-accept_all_btn"]');
    }

    addToCartButton(planType) {
        return cy.get('[data-click-id="hgr-homepage-pricing_table-add_to_cart-hosting_' + planType + '"]');
    }
}

module.exports = new LandingPage();