/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

/**
 * Custom Webpack config
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    /**
     * Adds aliases for paths (like components)
     * so you don't get lost in relative hell -> '../../../'
     */
    resolve: {
      alias: {
        "@components": path.join(__dirname, "./src/components"),
        "@images": path.join(__dirname, "./src/images"),
        "@locales": path.join(__dirname, "./src/locales"),
        "@templates": path.join(__dirname, "./src/templates"),
        "@themes": path.join(__dirname, "./src/themes")
      },
    }
  })
}