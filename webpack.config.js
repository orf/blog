const webpack = require('webpack');

module.exports = {
  // webpack folder's entry js - excluded from jekll's build process.
  entry: "./assets/js/site.js",
  output: {
    // we're going to put the generated file in the assets folder so jekyll will grab it.
      path: __dirname + '/assets/js/',
      filename: "bundle.js"
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};

