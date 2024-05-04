const LandingPage = require('../../screenobjects/landing.page');
const CartPage = require('../../screenobjects/cart.page');
const card1 = require('../../fixtures/payment.cards');
const uuid = require("uuid");

beforeEach(() => {
  cy.clearAllSessionStorage();
  cy.clearAllCookies();
  cy.clearLocalStorage();
  cy.viewport(1280, 720);
})

describe('Hostinger Homework Spec', () => {
  it('passes', () => {
    cy.visit('https://hostinger.com')
    LandingPage.acceptAllCookiesButton.click()
    LandingPage.addToCartButton('hostinger_business').click()
    CartPage.periodSelection('24 months').click()
    CartPage.emailInput.type(uuid.v4() + '@gmail.com')
    CartPage.passwordInput.type('thisshouldbegenerated')
    CartPage.planName.should('have.text', ' Business Web Hosting - 24 Months Plan')
    CartPage.oldPrice.should('have.text', '$335.76')
    CartPage.newPrice.should('have.text', '$107.76')
    CartPage.preTaxDiscount.should('have.text', ' -$228.00')
    CartPage.taxes.should('have.text', '$22.63')
    CartPage.totalPriceBeforeDiscount.should('have.text', '$406.27')
    CartPage.totalPriceAfterDiscount.should('have.text', '$130.39')
    CartPage.cardHolderNameInput.type(card1.cardHolder)
    CartPage.cardNumberInput.type(card1.cardNumber)
    CartPage.cardExpirationInput.type(card1.expirationDate)
    CartPage.cardCvcInput.type(card1.cvv)
    CartPage.submitPaymentButton.click()
    CartPage.paymentOverviewDialog.should('exist', { timeout: 10000 })
  })
})