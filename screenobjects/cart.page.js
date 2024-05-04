class CartPage {

    get accountCreationDialog() {
        return cy.get('#create-account');
    }

    get emailInput() {
        return this.accountCreationDialog.find('div[class*=create-account__email-input]');
    }

    get passwordInput() {
        return this.accountCreationDialog.find('div[class*=login__password]');
    }

    periodSelection(periodType) {
        return cy.get('div[id=hcart-cart-period-selector]').contains(periodType);
    }

    get paymentOverviewDialog() {
        return cy.get('#payment-overview');
    }

    get planName() {
        return this.paymentOverviewDialog.find('.d-none > .plan-info__plan-name');
    }

    get pricingEstimate() {
        return this.paymentOverviewDialog.find('div[class^=pricing]');
    }

    get oldPrice() {
        return this.pricingEstimate.find('.old-price');
    }

    get newPrice() {
        return this.pricingEstimate.find('h4');
    }

    get discounts() {
        return this.paymentOverviewDialog.find('.hcart-estimate__discounts');
    }

    get preTaxDiscount() {
        return this.discounts.eq(0).find('h4');
    }

    get taxes() {
        return this.discounts.eq(1).find('h4');
    }

    get totalPriceSummary() {
        return this.paymentOverviewDialog.find('.hcart-estimate__total');
    }

    get totalPriceBeforeDiscount() {
        return this.totalPriceSummary.find('div[class=old-price]');
    }

    get totalPriceAfterDiscount() {
        return this.totalPriceSummary.find('h3[class^=hcart-estimate__price]');
    }

    get paymentForm() {
        return cy.get('#payment-form');
    }

    get cardHolderNameInput() {
        return this.paymentForm.find('#cardholdername');
    }

    get paymentInputIframe() {
        return cy.get('iframe[class="processout-field-cc-iframe"]');
    }

    get cardNumberInput() {
        return this.paymentInputIframe.its('0.contentDocument').find('[name="cc-number"]');
    }

    get cardExpirationInput() {
        return this.paymentInputIframe.its('1.contentDocument').find('[name="cc-exp"]');
    }

    get cardCvcInput() {
        return this.paymentInputIframe.its('2.contentDocument').find('[name="cc-cvc"]');
    }

    get submitPaymentButton() {
        return cy.get('#hcart-submit-payment');
    }

    get paymentProcessingIndicator() {
        return cy.get('[class="h-circular"]');
    }
}

module.exports = new CartPage();