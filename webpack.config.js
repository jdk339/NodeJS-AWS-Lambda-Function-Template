const path = require('path');

module.exports = {
  entry: './index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'index',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [require('babel-plugin-transform-flow-strip-types')],
          presets: [
            [
              'env',
              {
                target: { node: 6.10 }, // Node version on AWS Lambda
                useBuiltIns: false,
                loose: false,
                exclude: [],
                debug: false
              },
            ],
          ],
        },
      }
    ],
  }
};