const uuid = require("uuid");

class CredentialGenerator {
    /**
     * Generates a simple email address using UUID and a domain.
     * @param {string} domain - The domain part of the email address (e.g., gmail.com).
     * @returns {string} The generated email address.
     */
    static generateEmail(domain) {
        return `${uuid.v4()}@${domain}`;
    }

    /**
     * Generates a simple password.
     * @param {number} length - The length of the password (default is 12 characters).
     * @returns {string} The generated password.
     */
    static generatePassword(length = 12) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return password;
    }
}

module.exports = CredentialGenerator;