const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { "arc-webinars": "./src/index.jsx" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js",
    publicPath: "/",
  },
  devServer: {
    port: 8080,
    open: true,
    watchFiles: "./src/index.jsx",
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: "development",
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.join(__dirname, "dist"),
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
      ],
      minimize: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
      new webpack.DefinePlugin({
          "process.env.NODE_ENV" : JSON.stringify("development"),
      }),
      new MiniCssExtractPlugin({
          filename: "[name].min.css"
      }),
  ].filter(Boolean),
};
