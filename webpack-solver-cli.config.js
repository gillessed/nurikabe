var path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './solver/cli.ts',
  output: {
    filename: 'cli.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
    ],
  },
};
