const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.vue$/, use: "vue-loader" },
      {
        test: /\.s(c|a)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              indentedSyntax: true,
            },
            options: {
              implementation: require("sass"),
              sassOptions: {
                indentedSyntax: true,
              },
            },
          },
        ],
      },
      { test: /\.css$/, use: ["vue-style-loader", "css-loader"] },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        include: /src/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        include: /src/,
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          appendTsSuffixTo: [/\.vue$/],
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
  ],
};
