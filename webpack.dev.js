const path = require('path');
const webpack = require('webpack');
const AppCachePlugin = require('appcache-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

const { LAN, PROD_URL } = process.env;

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, 'src', 'index.jsx')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/',
  },
  module: {
    rules: [{
      test: /\.scss/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    }, {
      test: /\.jsx/,
      use: [
        'babel-loader',
        'eslint-loader',
      ],
    }],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  devServer: {
    host: LAN || 'localhost',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.tpl.html'),
      filename: 'index.html',
      inject: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        PROD_URL: `"${PROD_URL}"`,
      },
    }),
    new AppCachePlugin({
      network: ['*'],
      settings: ['prefer-online'],
      output: 'cache.manifest',
    }),
  ],
};

