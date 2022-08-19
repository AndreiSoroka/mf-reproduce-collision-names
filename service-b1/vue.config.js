const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'auto',
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'b1',
        filename: 'remoteEntry.js',
        exposes: {
          './HomeViewB1.vue': './src/views/HomeViewB1.vue',
        },
        remotes: {
          c: 'c@http://localhost:8083/remoteEntry.js',
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },
});
