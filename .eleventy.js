const CleanCSS = require("clean-css");
const { minify } = require("terser");

module.exports = function(eleventyConfig) {
    // #region filters
    eleventyConfig.addFilter("listToString", function(value) {
        return value.toString();
    });
    eleventyConfig.addFilter("removeQuotes", function(value) {
        value = value.replace(/"/g, '')
        return value;
    });
    eleventyConfig.addFilter("removeNonAlphanumericCharacters", function(value) {
        value = value.replace(/[^0-9a-zA-Z_ ]/g, '')
        return value;
    });
    eleventyConfig.addFilter("removeMdMetadata", function(value) {
        return value.replace(/---.+---/gms, '');
    });
    eleventyConfig.addFilter("removeNewLines", function(value) {
        if (value.replace) {
            return value.replace(/\n/gms, '');
        } else {
            return value;
        }
    });
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });
    eleventyConfig.addFilter("jsmin", async function(
        code,
        callback
    ) {
        try {
            const minified = await minify(code);
            callback(null, minified.code);
        } catch (err) {
            console.error("Terser error: ", err);
            // Fail gracefully.
            callback(null, code);
        }
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

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
};