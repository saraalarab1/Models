const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{
    vr: "./src/index.js",
  },
  output: {
    // the filename is the name of the bundled file
    filename: "[name].[contentHash].bundle.js",
    // dist is the folder name it gets exported to
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    }
  },
  mode: 'production', // Set to 'development' for development mode
  plugins: [new HtmlWebpackPlugin({
    chunks: ['vr'],
    template: "./src/index.html",
    filename: "index.html",
    // Injects file in the head of the html
    inject: 'head'
  })]
};
