const path = require('path'),
  webpack = require('webpack');

let IS_DEV = process.env.NODE_ENV === 'development',
  sourceLocation = process.env.NODE_ENV === 'custom' ? './custom/wrappers/' : './source/wrappers/',
  entryObj = {},
  fs = require('fs'),
  entries = fs.readdirSync('./source/wrappers/').filter(function (file) {
    return file.match(/.*\.js$/);
  });

entries.forEach(function (file) {
  entryObj[file.replace(/.js/g, '')] = sourceLocation + file;
});

function getPlugins () {
  if (IS_DEV) {
    return [];
  } else {
    return [
      new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        sourceMap: true,
        mangleProperties: {
          screw_ie8: false,
          ignore_quoted: true
        },
        compress: {
          screw_ie8: false,
          properties: false
        },
        output: {
          screw_ie8: false
        }
      })
    ];
  }
}

module.exports = [{
  entry: entryObj,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'source')
  },
  externals: {
    FusionCharts: 'FusionCharts'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
},
{
  entry: entryObj,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'minified')
  },
  externals: {
    FusionCharts: 'FusionCharts'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devtool: 'source-map',
  plugins: getPlugins()
}];
