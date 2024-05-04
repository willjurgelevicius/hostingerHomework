const uuid = require("uuid");

describe('Hostinger Homework Spec', () => {
  it('passes', () => {
    cy.clearLocalStorage()
    cy.visit('https://hostinger.com')
    cy.get('[data-click-id="hgr-cookie_consent-accept_all_btn"]').click()
    cy.get('[data-click-id="hgr-homepage-pricing_table-add_to_cart-hosting_hostinger_business"]').click()
    cy.get('.cart-choose-period > :nth-child(3)').click()
    cy.get('.create-account__email-input').type(uuid.v4() + '@gmail.com')
    cy.get('.login__password').type('thisonewasntleakedbefore')
    cy.get('.d-none > .plan-info__plan-name').should('have.text', ' Business Web Hosting - 24 Months Plan')
    cy.get('.pricing').should('have.text', '$335.76$107.76')
    cy.get(':nth-child(3) > .hcart-estimate__price').should('have.text', ' -$228.00')
    cy.get(':nth-child(4) > .hcart-estimate__price').should('have.text', '$22.63')
    cy.get('.d-flex > .hcart-estimate__price').should('have.text', '$130.39')
    cy.get('#cardholdername').type('Test User')
    cy.get('iframe[class="processout-field-cc-iframe"]').its('0.contentDocument').find('[name="cc-number"]').type(4111111111111111)
    cy.get('iframe[class="processout-field-cc-iframe"]').its('1.contentDocument').find('[name="cc-exp"]').type(1126)
    cy.get('iframe[class="processout-field-cc-iframe"]').its('2.contentDocument').find('[name="cc-cvc"]').type(123)
    cy.get('#hcart-submit-payment').click()
    cy.get('[class="h-circular"]', { timeout: 10000 }).should('exist')
  })
})