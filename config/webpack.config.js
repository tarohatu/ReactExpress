const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./client/index.html",
  filename: "./index.html"
});
 module.exports = {
  entry: ['@babel/polyfill', "./client/index.js"],
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
}; 
