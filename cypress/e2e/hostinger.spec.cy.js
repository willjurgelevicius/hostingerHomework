const Helpers = require('../../utils/Helpers');
const { LandingPage, CartPage } = require('../../screenobjects/index')
const { card1 } = require('../../fixtures/payment.cards');
const HostingTiers = require('../../fixtures/hosting.tiers');
const HostingPeriods = require('../../fixtures/hosting.periods');
const CredentialGenerator = require('../../utils/CredentialGenerator');

before(() => {

  //Kept having issues with the tests starting and staying logged in.
  //Cypress testIsolation is set to true, but doesn't seem to help, so I'm trying to force a clear here.
  cy.clearAllCookies()
  cy.clearAllLocalStorage()
  cy.clearAllSessionStorage()

  //Expand the viewport slightly and visit homepage
  cy.viewport(1280, 720);
  cy.visit('https://hostinger.com')
  LandingPage.acceptAllCookiesButton.click()
})

describe('Hostinger Homework Spec', () => {
  it('Selects a hosting plan, fills in required details and proceeds to pay', () => {

    // Define the hosting tier, period and construct plan name
    const hostingTier = HostingTiers.businessTier
    const hostingPeriod = HostingPeriods.twentyFourMonths
    const hostingPlanDisplayName = ' ' + hostingTier.displayName + ' - ' + hostingPeriod.displayName + ' Plan'

    // Select the hosting tier and period
    Helpers.addToCartButton(hostingTier.selector).click()
    Helpers.periodSelection(hostingPeriod.selector).click()

    // Wait for account creation dialog to be visible, then fill in email and password
    CartPage.accountCreationDialog.should('be.visible')
    CartPage.emailInput.type(CredentialGenerator.generateEmail('gmail.com'))
    CartPage.passwordInput.type(CredentialGenerator.generatePassword())

    // Validate that the correct plan is selected and that prices are as expected
    CartPage.planName.should('have.text', hostingPlanDisplayName)
    CartPage.oldPrice.should('have.text', '$335.76')
    CartPage.newPrice.should('have.text', '$107.76')
    CartPage.preTaxDiscount.should('have.text', ' -$228.00')
    CartPage.taxes.should('have.text', '$22.63')
    CartPage.totalPriceBeforeDiscount.should('have.text', '$406.27')
    CartPage.totalPriceAfterDiscount.should('have.text', '$130.39')

    // Validate that the payment input dialog is visible, fill in payment details and click submit payment button
    CartPage.paymentInputIframe.should('be.visible')
    CartPage.cardHolderNameInput.type(card1.holder)
    CartPage.cardNumberInput.type(card1.number)
    CartPage.cardExpirationInput.type(card1.exp)
    CartPage.cardCvcInput.type(card1.cvv)
    CartPage.submitPaymentButton.click()

    // Wait for the payment overview loader to appear, instead of the card to be declined
    //(got almost a different decline error every time from the payment gateway)
    CartPage.paymentOverviewDialog.should('exist', { timeout: 10000 })
  })
})

after(() => {
  cy.clearAllCookies()
  cy.clearAllLocalStorage()
  cy.clearAllSessionStorage()
})