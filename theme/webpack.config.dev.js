import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import commonConfig from './webpack.common.js'
import GenerateAssetManifestPlugin from './webpack/generateAssetManifest.js'
import webpackParams from './webpack/params.js'
import tailwindcss from 'tailwindcss'

const config = {
  ...commonConfig,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /webpack/,
          /languages/,
          /webpack.common.js/,
          /webpack.config.dev.js/,
          /webpack.config.prod.js/,
          /tailwind.config.js/,
          /phpcs.xml.dist/,
          /style-rtl.css/,
          /package.json/,
          /yarn.lock/,
          /readme.txt/,
          /LICENSE/,
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [...(webpackParams.isTailwind ? [tailwindcss] : [])]
              },
            },
          },
          'sass-loader',
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
    new GenerateAssetManifestPlugin({
      action: 'clear',
    }),
    new BrowserSyncPlugin({
      proxy: webpackParams.proxy,
      host: 'localhost',
      port: 3003,
      open: 'external',
      notify: true,
      reloadDelay: 0,
      injectChanges: true,
      reloadOnRestart: false,
      files: webpackParams.isTailwind ? [] : ["./**/*.php"],
    }),
  ],
  devtool: 'inline-source-map',
}

export default config
