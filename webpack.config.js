const path = require( 'path' );
const webpack = require( 'webpack' );
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ( env, options ) => {
	return {
		entry: './dist/static/index.js',
		output: {
			path: path.resolve( __dirname, 'dist/build' )
		},
		devtool: 'cheap-eval-source-map',
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components|endpoints)/
				}
			],
		}
	}
};
