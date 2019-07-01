var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	devtool: 'eval',
	entry: "./index.js",
	context: __dirname + "/src",
	devServer: {
		index: "index.html"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html"
		})
	]
};
