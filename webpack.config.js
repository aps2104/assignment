var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /(node_modules|bower_components)/,loader: 'babel-loader', query: {presets: ['react']}},
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  }
}
