const webpack = require('webpack');
const path = require("path");

module.exports = {
  pages: {
    "index": {
      entry: "src/main.js", 
      template: "public/index.html", 
      filename: "index.html"
    }
  },
  filenameHashing: false,
  productionSourceMap: false,
  devServer: {
    contentBase: path.join(__dirname, "static"),
    index: "/index.html",
    historyApiFallback: {
      rewrites: [
        { from: /\/index/, to: "/index.html" }
      ]
    }
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      sass: {
        data: `@import "@/scss/variables.scss";@import "@/scss/mixin.scss";`
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  }
};
