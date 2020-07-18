const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      library: 'App',
      globalObject: 'this',
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  }
}