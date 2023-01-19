const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
      },
      open: false,
      host: 'localhost',
      port: 3000,
  }
};
