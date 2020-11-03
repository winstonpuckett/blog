const CleanCSS = require("clean-css");
const { minify } = require("terser");
const htmlmin = require("html-minifier");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    // #region filters
    eleventyConfig.addFilter("htmlEncode", function(value) {
        return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    })
    eleventyConfig.addFilter("toJsonArrayString", function(value) {
        return JSON.stringify(value) //`["${value.replace(/,/g, '","')}"]asdf`;
    });
    eleventyConfig.addFilter("removeQuotes", function(value) {
        value = value.replace(/["']/g, '')
        return value;
    });
    eleventyConfig.addFilter("removeNonAlphanumericCharacters", function(value) {
        value = value.replace(/[^0-9a-zA-Z_ ]/g, '')
        return value;
    });
    eleventyConfig.addFilter("removeMdMetadata", function(value) {
        return value.replace(/---.+---/gms, '');
    });
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });
    eleventyConfig.addFilter("formatDate", function(date) {
        const year = date.slice(0, 4);
        const monthNumber = date.slice(5, 7);
        const day = parseInt(date.slice(8, 10));
        let month = '';
        switch (monthNumber) {
            case '01':
                month = 'January'
                break;
            case '02':
                month = 'February'
                break;
            case '03':
                month = 'March'
                break;
            case 04:
                month = 'April'
                break;
            case '05':
                month = 'May'
                break;
            case 06:
                month = 'June'
                break;
            case '07':
                month = 'July'
                break;
            case '08':
                month = 'August'
                break;
            case '09':
                month = 'September'
                break;
            case '10':
                month = 'October'
                break;
            case '11':
                month = 'November'
                break;
            case '12':
                month = 'December'
                break;
            default:
                break;
        }
        const formattedDate = `${month} ${day}, ${year}`
        return formattedDate;
    });
    // #endregion filters

    eleventyConfig.addPlugin(pluginRss);

    // #region transform
    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
        if (outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }

        return content;
    });
    // #endregion transform

    // #region passthrough
    eleventyConfig.addPassthroughCopy({ "src/_includes/js": "assets/js/" });
    eleventyConfig.addPassthroughCopy({ "src/_includes/css/footer.css": "assets/css/footer.css" });
    // #endregion passthrough

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
};