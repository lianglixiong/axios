const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');
var config = {};

function generateConfig(name) {
  var compress = name.indexOf('min') > -1;
  var config = {
    entry: './index.js',
    output: {
      path: __dirname + '/dist/',
      filename: name + '.js',
      sourceMapFilename: name + '.map',
      library: 'axios',
      libraryTarget: 'umd'
    },
    node: {
      process: false
    },
    devtool: 'source-map',
    mode: compress ? 'production' : 'development',
    devServer: {
      // contentBase: path.join(__dirname, 'dist'),
      // compress: true,
      port: 9000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'axios源码解读',
        filename: 'src/index.html'
      })
    ]
  };
  return config;
}

['axios', 'axios.min'].forEach(function (key) {
  config[key] = generateConfig(key);
});

module.exports = config;
