import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import commonConfig from './webpack.common.js'
import GenerateAssetManifestPlugin from './webpack/generateAssetManifest.js' // Імпорт нового плагіна

const config = {
  ...commonConfig,
  mode: 'production',

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
      action: 'create',
      ignore: ['admin.css', 'admin.js']
    }),
  ],
}

export default config
