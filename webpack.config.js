const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  output: {
    filename: '[name].js',
    path: __dirname + '/assets/js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/[name].css",
      chunkFilename: "[id].css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/images", to: "../images" }
      ],
    }),
  ],
};