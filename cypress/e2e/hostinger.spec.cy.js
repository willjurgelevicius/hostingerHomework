const LandingPage = require('../../screenobjects/landing.page');
const CartPage = require('../../screenobjects/cart.page');
const { card1 } = require('../../fixtures/payment.cards');
const HostingTiers = require('../../fixtures/hosting.tiers');
const HostingPeriods = require('../../fixtures/hosting.periods');
const uuid = require("uuid");

before(() => {
  //Expand the viewport slightly, visit homepage and accept all cookies
  cy.viewport(1280, 720);
  cy.clearAllCookies()
  cy.clearAllLocalStorage()
  cy.clearAllSessionStorage()
  cy.visit('https://hostinger.com')
  LandingPage.acceptAllCookiesButton.click()
})

describe('Hostinger Homework Spec', () => {
  it('Selects a hosting plan, fills in required details and proceeds to pay', () => {

    // Define the hosting tier and period
    const hostingTier = HostingTiers.businessTier
    const hostingPeriod = HostingPeriods.twentyFourMonths

    // Select the hosting tier and period
    LandingPage.addToCartButton(hostingTier.selector).click()
    CartPage.periodSelection(hostingPeriod.selector).click()

    // Fill in email and password
    CartPage.emailInput.type(uuid.v4() + '@gmail.com')
    CartPage.passwordInput.type('thisshouldbegenerated')

    // Validate that the correct plan is selected and that prices are as expected
    CartPage.planName.should('have.text', ' ' + hostingTier.displayName + ' - ' + hostingPeriod.displayName + ' Plan')
    CartPage.oldPrice.should('have.text', '$335.76')
    CartPage.newPrice.should('have.text', '$107.76')
    CartPage.preTaxDiscount.should('have.text', ' -$228.00')
    CartPage.taxes.should('have.text', '$22.63')
    CartPage.totalPriceBeforeDiscount.should('have.text', '$406.27')
    CartPage.totalPriceAfterDiscount.should('have.text', '$130.39')

    // Fill in payment details and click submit payment button
    CartPage.cardHolderNameInput.type(card1.holder)
    CartPage.cardNumberInput.type(card1.number)
    CartPage.cardExpirationInput.type(card1.exp)
    CartPage.cardCvcInput.type(card1.cvv)
    CartPage.submitPaymentButton.click()

    // Wait for the payment overview loader to appear, instead of the card to be declined
    //(got varying errors back from the payment gateway)
    CartPage.paymentOverviewDialog.should('exist', { timeout: 10000 })
  })
})