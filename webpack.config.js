const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      libraryTarget: 'umd',
      libraryExport: 'default', 
      library: 'app',
      globalObject: 'this',
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  }
}
