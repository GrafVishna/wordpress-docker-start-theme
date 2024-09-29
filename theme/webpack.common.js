import path from 'path'
import { fileURLToPath } from 'url'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const commonConfig = {
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, 'assets/src/img'),
      '@files': path.resolve(__dirname, 'assets/src/files'),
    },
  },
  entry: {
    app: ['./assets/src/app.js', './assets/src/app.scss'],
    admin: ['./assets/src/admin-app.js', './assets/src/admin-app.scss'],
  },
  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    filename: 'js/[name].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'assets/src/files'),
          to: path.resolve(__dirname, 'assets/dist/files'),
          globOptions: {
            ignore: ['**/.*'], // ігноруємо приховані файли
          },
          noErrorOnMissing: true, // додаємо цю опцію
        },
      ],
    }),
  ],
}

export default commonConfig
