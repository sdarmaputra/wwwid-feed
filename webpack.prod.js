const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = merge(common, {
	plugins: [
		new MinifyPlugin(),
		new UglifyPlugin(),
		new BundleAnalyzerPlugin()
	]
})
	
module.exports = config
