const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Utils: path.resolve(__dirname, 'src/utils/'),
      Actions: path.resolve(__dirname, 'src/actions/'),
      Reducers: path.resolve(__dirname, 'src/redcuers/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Api: path.resolve(__dirname, 'src/api/'),
      Selectors: path.resolve(__dirname, 'src/selectors/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
