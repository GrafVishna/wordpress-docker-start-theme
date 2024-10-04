import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import tailwindcss from 'tailwindcss'
import commonConfig from './webpack.common.js'
import GenerateAssetManifestPlugin from './webpack/generateAssetManifest.js'
import webpackParams from './webpack/params.js'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'

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
        oneOf: [
          {
            test: /\.(scss|css)$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      ...(webpackParams.isTailwind ? [tailwindcss] : []),
                      autoprefixer(),
                      ...(process.env.NODE_ENV === 'production'
                        ? [cssnano({ preset: 'default' })]
                        : []),
                    ],
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
    ],
  },
  plugins: [
    ...commonConfig.plugins,
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),

    new GenerateAssetManifestPlugin({
      action: webpackParams.isManifest ? 'create' : 'clear',
      ignore: webpackParams.isManifest ? ['admin.css', 'admin.js'] : [],
    }),
  ],

  devtool: 'source-map',
}

export default config
