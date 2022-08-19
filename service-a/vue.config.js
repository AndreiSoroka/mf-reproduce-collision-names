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
        name: 'a',
        filename: 'remoteEntry.js',
        remotes: {
          b1: 'b1@http://localhost:8081/remoteEntry.js',
          b2: 'b2@http://localhost:8082/remoteEntry.js',
          b3: 'b3@http://localhost:8084/remoteEntry.js',
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
