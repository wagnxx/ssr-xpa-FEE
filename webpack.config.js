const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');
const glob = require('glob');
const merge = require('webpack-merge');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';

const _entry = {};
const _plugins = [];
const files = glob.sync('./src/web/**/*.entry.js');
for (const file of files) {
  if (/\/(\w+-\w+)\.entry.js$/.test(file)) {
    const entryKey = RegExp.$1;
    const [dist, template] = entryKey.split('-');
    _entry[entryKey] = file;
    _plugins.push(
      new HtmlWebpackPlugin({
        filename: `../views/${dist}/pages/${template}.html`,
        template: `src/web/views/${dist}/pages/${template}.html`,
        inject: false,
        chunks: [entryKey]
      })
    );
  }
}

const config = {
  entry: _entry,
  output: {
    path: join(__dirname, './dist/assets'),
    publicPath: '/',
    filename: 'scripts/[name].bundle.js'
  },
  plugins: [..._plugins]
};

const _mergeConfig = require(`./config/webpack.${_mode}.js`);
module.exports = merge(config, _mergeConfig);
