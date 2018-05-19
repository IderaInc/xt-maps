const path = require('path'),
  webpack = require('webpack'),
  WrapperPlugin = require('wrapper-webpack-plugin');

let IS_DEV = process.env.NODE_ENV === 'development',
  sourceLocation = process.env.NODE_ENV === 'custom' ? './custom/wrappers/' : './source/wrappers/',
  entryObj = {},
  fs = require('fs'),
  entries = fs.readdirSync(sourceLocation).filter(function (file) {
    return file.match(/.*\.js$/);
  }),
  moduleWrapperHeader = `
(function (factory) {
  if (typeof module === 'object' && typeof module.exports !== "undefined") {
      module.exports = factory;
  } else {
      factory(FusionCharts);
  }
}(function (FusionCharts) {
`,
  moduleWrapperFooter = `
}));
`;

entries.forEach(function (file) {
  entryObj[file.replace(/.js/g, '')] = sourceLocation + file;
});

function getPlugins (doMinify) {
  var arr = [new WrapperPlugin({
    test: /\.js$/,
    header: moduleWrapperHeader,
    footer: moduleWrapperFooter
  })];
  if (IS_DEV) {
    return arr;
  } else {
    doMinify && arr.push(new webpack.optimize.UglifyJsPlugin({
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
      }));
    return arr;
  }
}

module.exports = [{
  entry: entryObj,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'source')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: getPlugins()
},
{
  entry: entryObj,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'minified')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devtool: IS_DEV && 'source-map',
  plugins: getPlugins(true)
}];
