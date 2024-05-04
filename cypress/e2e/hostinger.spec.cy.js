const LandingPage = require('../../screenobjects/landing.page');
const CartPage = require('../../screenobjects/cart.page');
const { card1 } = require('../../fixtures/payment.cards');
const { businessTier } = require('../../fixtures/hosting.tiers');
const { twentyFourMonths } = require('../../fixtures/hosting.periods');
const uuid = require("uuid");

before(() => {
  cy.viewport(1280, 720);
})

describe('Hostinger Homework Spec', () => {
  it('Selects a hosting plan, fills in required details and proceeds to pay', () => {
    cy.visit('https://hostinger.com')
    LandingPage.acceptAllCookiesButton.click()
    LandingPage.addToCartButton(businessTier.selector).click()
    CartPage.periodSelection(twentyFourMonths.selector).click()
    CartPage.emailInput.type(uuid.v4() + '@gmail.com')
    CartPage.passwordInput.type('thisshouldbegenerated')
    CartPage.planName.should('have.text', ' ' + businessTier.displayName + ' - ' + twentyFourMonths.displayName + ' Plan')
    CartPage.oldPrice.should('have.text', '$335.76')
    CartPage.newPrice.should('have.text', '$107.76')
    CartPage.preTaxDiscount.should('have.text', ' -$228.00')
    CartPage.taxes.should('have.text', '$22.63')
    CartPage.totalPriceBeforeDiscount.should('have.text', '$406.27')
    CartPage.totalPriceAfterDiscount.should('have.text', '$130.39')
    CartPage.cardHolderNameInput.type(card1.holder)
    CartPage.cardNumberInput.type(card1.number)
    CartPage.cardExpirationInput.type(card1.exp)
    CartPage.cardCvcInput.type(card1.cvv)
    CartPage.submitPaymentButton.click()
    CartPage.paymentOverviewDialog.should('exist', { timeout: 10000 })
  })
})