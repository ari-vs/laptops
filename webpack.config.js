module.exports = {
  mode: 'development',
  entry: "./dist/tsc/shop.js",
  devtool: "source-map",
  output: {
    filename: "shop.js",
    library: "shop"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  }
}
