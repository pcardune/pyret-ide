var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var IS_PRODUCTION = process.env.NODE_ENV === 'production';

// this is the config for generating the files needed to run the examples.
module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
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
  ] : [],
  resolve: {
    root: [path.resolve("./node_modules")],
    alias: {
      'pyret-ide': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ["style", "css"] },
    ].concat(IS_PRODUCTION ? [] : [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'react-hot'
      },
    ]),
    preLoaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'spec'),
      ],
      loader: "babel",
      query: {
        cacheDirectory: true
      }
    }],
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
