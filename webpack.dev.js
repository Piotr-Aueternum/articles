const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

const { LAN } = process.env;

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, 'src', 'index.jsx')],
  output: {
    publicPath: 'src/',
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
      },
    }),
  ],
};
