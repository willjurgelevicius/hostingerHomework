/**
 * Module representing credit card details for testing purposes.
 * @typedef {Object} CreditCard
 * @property {string} holder - The cardholder's name.
 * @property {string} number - The card number.
 * @property {string} exp - The card expiration date.
 * @property {string} cvv - The card CVV code.
 */

/**
 * Object containing credit card details for testing.
 * @type {Object<string, CreditCard>}
 */

const creditCards = {
    card1: {
        holder: 'Test User',
        number: '4111111111111111',
        exp: '1127',
        cvv: '123',
    },
    card2: {
        holder: 'Test Usertwo',
        number: '4111111111111112',
        exp: '1127',
        cvv: '123',
    }
}

module.exports = creditCards;