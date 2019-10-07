const { join } = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  devServer: {
    contentBase: join(__dirname, '../dist'),
    hot: true,
    quiet: true,
    port: '3000'
  },
  plugins: [
    new CopyPlugin([
      {
        from: join(__dirname, '../', 'src/web/views/layouts/layout.html'),
        to: '../views/layouts/layout.html'
      }
    ]),
    new CopyPlugin([
      {
        from: join(__dirname, '../', 'src/web/components'),
        to: '../views/components'
      }
    ])
  ]
};
