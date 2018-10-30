const withFonts = require('next-fonts')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withSass(withImages(withFonts({
})))
