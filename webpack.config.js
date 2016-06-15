var _ = require('lodash');
var path = require('path');
var webpack = webpack = require('webpack');

var IS_PRODUCTION = process.env.NODE_ENV === 'production';

// this is the config for generating the files needed to run the examples.
module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    publicPath: IS_PRODUCTION ? undefined : "http://localhost:8080/assets/",
  },
  devtool: IS_PRODUCTION ? null : 'eval',
  entry: {
    "index": './src/dev-app/index.js',
    "third-party": [
      'babel-polyfill',
      'immutable',
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'redux-thunk',
      'redux-logger',
      'redux-devtools',
    ],
  },
  resolve: {
    root: [path.resolve("./node_modules")],
    alias: {
      'pyret-ide': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'react-hot'
      },
    ],
    preLoaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      loader: "babel",
      query: {
        cacheDirectory: true
      }
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name:'third-party',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ].concat(IS_PRODUCTION ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ] : [
    new webpack.HotModuleReplacementPlugin(),
  ]),
  babel: {
    presets: ['es2015', 'react'],
    sourceMaps: true,
  },
  devServer: IS_PRODUCTION ? false : {
    hot: true,
    inline: true,
    progress: true,
    contentBase: path.join(__dirname, 'src', 'dev-app')
  }
};
