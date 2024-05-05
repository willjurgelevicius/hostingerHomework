/**
 * Utility class providing helper methods for interacting with elements on the website.
 */
class Helpers {

    periodSelection(periodType) {
        return cy.get('div[id=hcart-cart-period-selector]').contains(periodType);
    }

    addToCartButton(planType) {
        return cy.get('[data-click-id="hgr-homepage-pricing_table-add_to_cart-hosting_' + planType + '"]');
    }
}

module.exports = new Helpers();