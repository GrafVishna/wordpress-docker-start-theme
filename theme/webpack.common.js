import path from 'path'
import { fileURLToPath } from 'url'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const commonConfig = {
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, 'assets/src/img'),
    },
  },
  entry: {
    app: ['./assets/src/app.js', './assets/src/app.scss'],
    admin: ['./assets/src/admin.js', './assets/src/admin.scss'],
  },
  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    filename: 'js/[name].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}

export default commonConfig
