import webpackParams from './webpack/params.js'

const allPlugins = {
   autoprefixer: {},
}

const tailwindPlugins = {
   tailwindcss: {}, 
}

export default {
   plugins: webpackParams.isTailwind
      ? { ...allPlugins, ...tailwindPlugins }
      : allPlugins,
}
