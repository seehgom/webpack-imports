const path = require('path');
const WebpackHtmlPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './main.js',
	mode: "development",
	output: {
		filename: "[name].bundle.js",
		path: path.join(__dirname, 'dist'),
	},
	devServer: {
		port: 8001,
		liveReload: true
	},
	plugins: [new WebpackHtmlPlugin({
		filename: "index.html",
		template: "index.html"
	})],
	devtool: 'source-map',
	optimization: {
		runtimeChunk: "single",
		splitChunks: false
	},
}