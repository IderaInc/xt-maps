const path = require('path'),
  webpack = require('webpack'),
  WrapperPlugin = require('wrapper-webpack-plugin'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  fs = require('fs-extra');


let IS_DEV = process.env.NODE_ENV === 'development',
  sourceLocation = process.env.NODE_ENV === 'custom' ? './custom/maps/' : './source/maps/',
  wrapperLocation = './_temp_wrappers/',
  entryObj = {},
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
  mapName,
  moduleObject = {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          compact: false,
          babelrc: false,
          cacheDirectory: true,
          plugins: getBabelPlugins(),
          presets: [['env', {
            targets: { browsers: ['> 0.1%'] },
            loose: true
          }]]
        }
      }
    }]
  },
  wrapperTemplateStr,
  wrapperTemplate = `import __MAP_NAME__ from '../source/maps/fusioncharts.__MAP_NAME__';
FusionCharts.addDep(__MAP_NAME__);`;

entries.forEach(function (file) {
  if (process.env.NODE_ENV === 'custom') {
    fs.copySync(sourceLocation + file, './source/maps/' + file);
  }
  mapName = file.match(/^fusioncharts\.(.*)\.js$/)[1];
  wrapperTemplateStr = wrapperTemplate.replace(/__MAP_NAME__/g, mapName);
  fs.ensureDirSync(wrapperLocation);
  fs.writeFileSync(wrapperLocation + file, wrapperTemplateStr, 'utf8');

  entryObj[file.replace(/.js/g, '')] = wrapperLocation + file;
});

function getWebpackPlugins () {
  let arr = [new WrapperPlugin({
    test: /\.js$/,
    header: moduleWrapperHeader,
    footer: moduleWrapperFooter
  })];
  return arr;
};

function getWebpackOptimizations () {
  let optimization = {};

  optimization.minimize = true;
  optimization.minimizer = [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        ecma: 5,
        ie8: true,
        mangle: false,
        compress: false,
        keep_classnames: true,
        keep_fnames: true
      }
    })
  ];
  return optimization;
};

function getBabelPlugins () {
  return [
    ['syntax-dynamic-import'],
    ['transform-es3-member-expression-literals'],
    ['transform-es3-property-literals'],
    ['transform-proto-to-assign']
  ];
};

module.exports = [{
  entry: entryObj,
  mode: 'none',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'source')
  },
  module: moduleObject,
  plugins: getWebpackPlugins()
},
{
  entry: entryObj,
  mode: 'none',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'minified')
  },
  module: moduleObject,
  devtool: IS_DEV && 'source-map',
  plugins: getWebpackPlugins(),
  optimization: getWebpackOptimizations()
}];
