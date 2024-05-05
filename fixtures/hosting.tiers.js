/**
 * Object representing hosting tiers with interactive comments.
 * @typedef {Object} HostingTier
 * @property {string} selector - The selector value for the hosting tier.
 * @property {string} displayName - The display name of the hosting tier.
 */

/**
 * Object containing hosting tiers and their details.
 * @type {Object<string, HostingPeriod>}
 */
const hostingTiers = {
    premiumTier: {
        selector: "hostinger_premium",
        displayName: "Premium Web Hosting",
    },
    businessTier: {
        selector: "hostinger_business",
        displayName: "Business Web Hosting"
    },
    cloudStartupTier: {
        selector: "cloud_economy",
        displayName: "Cloud Startup"
    }
};

module.exports = hostingTiers;