const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

const isProduction = process.env.NODE_ENV === "production";
const mode = isProduction ? "production" : "development";
const stylesHandler = MiniCssExtractPlugin.loader;
const target = isProduction ? "browserslist" : "web";
const devtool = isProduction ? void 0 : "source-map";

const config = {
  mode,
  target,
  devtool,
  entry: {
    main: path.resolve(__dirname, "src", "index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: isProduction ? "[name].[contenthash].js" : "[name].js",
    chunkFilename: isProduction ? "[name].[contenthash].js" : "[name].js",
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
      minRemainingSize: 0,
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  devServer: {
    open: true,
    host: "localhost",
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "src/configs", "config.env"),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? "[name].[contenthash].css" : "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                { targets: "defaults" },
                "@babel/preset-react",
              ],
            ],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          stylesHandler,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(eot|png|jpg|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name].[ext]",
        },
      },
      {
        test: /\.svg$/i,
        type: "asset/inline",
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(ttf)$/i,
        type: "asset",
        generator: {
          filename: "assets/fonts/[name].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      assets: path.resolve(__dirname, "src/assets/"),
      components: path.resolve(__dirname, "src/components/"),
      configs: path.resolve(__dirname, "src/configs/"),
      constants: path.resolve(__dirname, "src/constants/"),
      hooks: path.resolve(__dirname, "src/hooks/"),
      modules: path.resolve(__dirname, "src/modules/"),
      pages: path.resolve(__dirname, "src/pages/"),
      routes: path.resolve(__dirname, "src/routes/"),
      scss: path.resolve(__dirname, "src/scss/"),
      services: path.resolve(__dirname, "src/services/"),
      types: path.resolve(__dirname, "src/types/"),
      utils: path.resolve(__dirname, "src/utils/"),
      interfaces: path.resolve(__dirname, "src/interfaces/"),
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }

  return config;
};
