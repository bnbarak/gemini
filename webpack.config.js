const HtmlWebpackPlugin = require('html-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: './index.jsx',
  context: `${__dirname}/src`,
  devServer: {
    index: 'index.html',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new FlowWebpackPlugin({
      failOnErrorWatch: true,
    }),
  ],
};
