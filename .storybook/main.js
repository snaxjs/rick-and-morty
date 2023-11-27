import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

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
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          assets: path.resolve(
            __dirname.replace(".storybook", ""),
            "src/assets/",
          ),
          components: path.resolve(
            __dirname.replace(".storybook", ""),
            "src/components/",
          ),
          configs: path.resolve(
            __dirname.replace(".storybook", ""),
            "src/configs/",
          ),
          constants: path.resolve(
            __dirname.replace(".storybook", ""),
            "src/constants/",
          ),
          hooks: path.resolve(
            __dirname.replace(".storybook", ""),
            "src/hooks/",
          ),
          modules: path.resolve(
            __dirname.replace(".storybook", ""),
            "src/modules/",
          ),
          pages: path.resolve(
            __dirname.replace(".storybook", ""),
            "src/pages/",
          ),
          routes: path.resolve(
            __dirname.replace(".storybook", ""),
            "src/routes/",
          ),
          scss: path.resolve(__dirname.replace(".storybook", ""), "src/scss/"),
          services: path.resolve(
            __dirname.replace(".storybook", ""),
            "src/services/",
          ),
          types: path.resolve(
            __dirname.replace(".storybook", ""),
            "src/types/",
          ),
          utils: path.resolve(
            __dirname.replace(".storybook", ""),
            "src/utils/",
          ),
          interfaces: path.resolve(
            __dirname.replace(".storybook", ""),
            "src/interfaces/",
          ),
        },
      },
    };
  },
};
export default config;
