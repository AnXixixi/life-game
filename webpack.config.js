module.exports = {
  entry: './src/p5test/sketch.js',
  output: {
      path: __dirname,
      filename: './build/bundle.js'
  },
  module: {
      rules: [{
          test: /\.js?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader'
      }]
  }
}