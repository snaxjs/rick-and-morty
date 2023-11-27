import MiniCssExtractPlugin from "mini-css-extract-plugin";

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      plugins: [...config.plugins, new MiniCssExtractPlugin()],
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
              MiniCssExtractPlugin.loader,
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
        ],
      },
    };
  },
};
export default config;
