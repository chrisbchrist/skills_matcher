const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
    './module.css'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'dnnfree_spa_react_bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname),
    watchContentBase: true,
    publicPath: "/bundle/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      }
    ]
  }
}