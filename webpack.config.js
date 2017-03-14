var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/src/index.js',
  output: { path: __dirname, filename: './public/bundle.js' },
  resolve: {
    // root: __dirname,
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};