const path = require('path'),
      UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  entry: './Kiyoh.ts',

  plugins: [
    // new UglifyJSPlugin()
  ],

  output: {
    filename: process.env === 'production'? '[name].[chunkhash].js' : '[name].js',
    path: path.resolve(__dirname, 'distribute')
  },

  resolve: {
    extensions: [ '.ts', '.tsx', '.js'],
  },

  mode: 'development'
}