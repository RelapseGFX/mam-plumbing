module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/animation.js');
    eleventyConfig.addPassthroughCopy('./src/carousel.js');
    eleventyConfig.addPassthroughCopy('./src/script.js');
    eleventyConfig.addPassthroughCopy('./src/projects.js');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}