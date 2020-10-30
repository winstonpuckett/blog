// This file is a comprehensive list of all environment variables required to run
// the project. The "env" data source can be used in templates, but be aware that 
// other data files might use process.env directly. For instance, devPosts.js.
module.exports = {
    SITE_URL: process.env.SITE_URL,

    // Your DEV API key
    DEV_API_KEY: process.env.DEV_API_KEY,

    // Google Analytics / Adsense
    GOOGLE_ANALYTICS_TRACKING_ID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    GOOGLE_ADSENSE_DATA_AD_CLIENT: process.env.GOOGLE_ADSENSE_DATA_AD_CLIENT,

    // social links (please provide the whole link as you would see it in the address bar)
    SOCIAL_DEVTO: process.env.SOCIAL_DEVTO,
    SOCIAL_GITHUB: process.env.SOCIAL_GITHUB,
    SOCIAL_TWITTER: process.env.SOCIAL_TWITTER
};