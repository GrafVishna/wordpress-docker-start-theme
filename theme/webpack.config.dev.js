import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import commonConfig from './webpack.common.js'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import GenerateAssetManifestPlugin from './webpack/generateAssetManifest.js'

const config = {
  ...commonConfig,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                syntax: 'postcss-scss',
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [
    ...commonConfig.plugins,
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new GenerateAssetManifestPlugin({
      action: 'clear',
    }),
    new BrowserSyncPlugin({
      proxy: 'http://localhost:8000/',
      host: 'localhost',
      port: 3003,
      open: 'external',
      notify: false,
      reloadDelay: 0,
      injectChanges: true,
      reloadOnRestart: true,
    }),
  ],
  devtool: 'inline-source-map',
  watch: true,
}

export default config
