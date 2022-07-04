const path = require('path')

module.exports = {
    // distDir: '.next/build',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    optimizeFonts: false,
    typescript: {
        ignoreBuildErrors: true,
      },
}