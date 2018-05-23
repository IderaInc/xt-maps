const path = require('path'),
  webpack = require('webpack'),
  WrapperPlugin = require('wrapper-webpack-plugin');

let IS_DEV = process.env.NODE_ENV === 'development',
  sourceLocation = process.env.NODE_ENV === 'custom' ? './custom/maps/' : './source/maps/',
  wrapperLocation = process.env.NODE_ENV === 'custom' ? './custom/wrappers/' : './source/wrappers/',
  entryObj = {},
  fs = require('fs-extra'),
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
`,
  wrapperTemplate,
  mapName;

entries.forEach(function (file) {
  wrapperTemplate = `import __MAP_NAME__ from '../maps/fusioncharts.__MAP_NAME__';
FusionCharts.addDep(__MAP_NAME__);`;
  mapName = file.split('.')[1];
  wrapperTemplate = wrapperTemplate.replace(/__MAP_NAME__/g, mapName);
  fs.ensureDirSync(wrapperLocation);
  fs.writeFileSync(wrapperLocation + file, wrapperTemplate, 'utf8');

  entryObj[file.replace(/.js/g, '')] = wrapperLocation + file;
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
