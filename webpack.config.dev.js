var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel?stage=0'], include: path.join(__dirname, 'src')},
      {test: /\.scss$/, loaders: ['style', 'css', 'sass' ]  },
      {test: /\.css/, loaders: ['style', 'css' ]  }
    ]
  }
};
