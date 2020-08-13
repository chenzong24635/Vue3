const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV === 'production' ?  './': '/')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?  './': '/',
  productionSourceMap: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/main.less')]
    }
  },
}  