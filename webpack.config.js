var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var IS_PRODUCTION = process.env.NODE_ENV === 'production';

var SRC_DIRECTORY = path.resolve(__dirname, 'src');
var BUILD_DIRECTORY = path.resolve(__dirname, "build");
var TEST_DIRECTORY = path.resolve(__dirname, "spec");
// this is the config for generating the files needed to run the examples.
module.exports = {
  output: {
    path: BUILD_DIRECTORY,
    filename: "[name].js",
    publicPath: IS_PRODUCTION ? undefined : "",
    libraryTarget: IS_PRODUCTION ? 'commonjs2' : undefined,
  },
  devtool: IS_PRODUCTION ? null : 'eval',
  entry: IS_PRODUCTION ? {
    "pyret-ide": './src/pyret-ide',
  } : {
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
  externals: IS_PRODUCTION ? [
    'react',
    'react-dom',
    'codemirror',
  ] : [],
  resolve: {
    root: [path.resolve("./node_modules")],
    alias: {
      'pyret-ide': SRC_DIRECTORY,
    },
  },
  module: {
    loaders: [
      {test: /\.css$/, loaders: ["style", "css"]},
      {test:/.png|.jpg|.jpeg|.gif|.svg/, loader: "url-loader?limit=10000"},
      {test:/.woff|.woff2/, loader: "url-loader?limit=10000"},
      {test:/.woff|.woff2/, loader: "url-loader?limit=10000"},
      {test:/.ttf|.eot/, loader: "file-loader"},
      {test: /\.less$/, loader:'style!css!less'},
    ].concat(IS_PRODUCTION ? [] : [
      {
        test: /\.js$/,
        include: [SRC_DIRECTORY],
        loader: 'react-hot'
      },
    ]),
    preLoaders: [{
      test: /\.js$/,
      include: [
        SRC_DIRECTORY,
        TEST_DIRECTORY,
      ],
      loaders: ["babel?cacheDirectory", "eslint"],
    }].concat(
      (process.env.COVERAGE || process.env.CONTINUOUS_INTEGRATION) ?
      [{
        test: /\.js/,
        loader: 'isparta',
        include: SRC_DIRECTORY,
        exclude: /node_modules/
      }] :
      []
    ),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ].concat(IS_PRODUCTION ? [
  ] : [
    new webpack.optimize.CommonsChunkPlugin({
      name:'third-party',
      minChunks: Infinity
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(
        process.env.FIREBASE_API_KEY
      ),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
        process.env.FIREBASE_AUTH_DOMAIN
      ),
      'process.env.FIREBASE_DATABASE_URL': JSON.stringify(
        process.env.FIREBASE_DATABASE_URL
      ),
    }),
  ]),
  devServer: IS_PRODUCTION ? false : {
    hot: true,
    inline: true,
    progress: true,
    contentBase: path.join(__dirname, 'src', 'dev-app')
  }
};
