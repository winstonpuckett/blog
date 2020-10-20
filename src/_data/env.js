// This file is a comprehensive list of all environment variables required to run
// the project. The "env" data source can be used in templates, but be aware that 
// other data files might use process.env directly. For instance, devPosts.js.
module.exports = {
    DEV_API_KEY: process.env.DEV_API_KEY,
    GOOGLE_ANALYTICS_TRACKING_ID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    GOOGLE_ADSENSE_DATA_AD_CLIENT: process.env.GOOGLE_ADSENSE_DATA_AD_CLIENT
};