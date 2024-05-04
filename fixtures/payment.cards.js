class CreditCard {
    constructor(cardHolder, cardNumber, expirationDate, cvv) {
        this.cardHolder = cardHolder;
        this.cardNumber = cardNumber;
        this.expirationDate = expirationDate;
        this.cvv = cvv;
    }
}

const card1 = new CreditCard('Test User', '4111111111111111', '1127', '123');
const card2 = new CreditCard('Test Usertwo', '4111111111111112', '1127', '123');

module.exports = card1, card2;