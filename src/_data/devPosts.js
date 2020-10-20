const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function() {
    let devPosts = await Cache('https://dev.to/api/articles/me', {
        duration: '1h',
        type: 'json',
        fetchOptions: {
            headers: {
                'api-key': `${process.env.DEV_API_KEY}`,
            }
        }
    });
    return devPosts;
};