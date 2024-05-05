/**
 * Object representing hosting periods with interactive comments.
 * @typedef {Object} HostingPeriod
 * @property {string} selector - The selector value for the hosting period.
 * @property {string} displayName - The display name of the hosting period.
 */

/**
 * Object containing hosting periods and their details.
 * @type {Object<string, HostingPeriod>}
 */

const hostingPeriods = {
    oneMonth: {
        selector: "1 month",
        displayName: "1 Month"
    },
    twelveMonths: {
        selector: "12 months",
        displayName: "12 Months"
    },
    twentyFourMonths: {
        selector: "24 months",
        displayName: "24 Months"
    },
    fourtyEightMonths: {
        selector: "48 months",
        displayName: "48 Months"
    }
};

module.exports = hostingPeriods;