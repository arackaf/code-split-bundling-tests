const path = require("path");
const isProd = true;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: isProd ? "[name]-bundle-[contenthash].js" : "[name]-bundle.js",
    chunkFilename: isProd ? "[name]-chunk-[contenthash].js" : "[name]-chunk.js",
    path: path.resolve(__dirname, "dist-wp"),
    publicPath: "/dist-wp/"
  },
  resolve: {
    modules: [path.resolve("./"), path.resolve("./node_modules")]
  },
  mode: isProd ? "production" : "development",
  optimization: {
    //minimize: false
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html" })].filter(p => p)
};
