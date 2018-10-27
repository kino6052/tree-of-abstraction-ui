const path = require( 'path' );
const webpack = require( 'webpack' );
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ( env, options ) => {
	return {
		entry: './src/static/index.ts',
		output: {
			path: path.resolve( __dirname, 'dist' )
		},
		devtool: 'cheap-eval-source-map',
		module: {
			rules: [
				{
					test: /\.ts$/,
					use: {
						loader: 'ts-loader'
					},
          // include: path.join(__dirname, 'src/static'),
					exclude: /(node_modules|bower_components|endpoints)/
				},
				// {
				// 	test: /\.css$/,
				// 	use: [
				// 		MiniCssExtractPlugin.loader,
				// 		{
				// 			loader: 'css-loader',
				// 			options: {
				// 				importLoaders: 1,
				// 				minimize: ( options.mode == 'production' ? true : false ),
				// 				sourceMap: true,
				// 			}
				// 		},
				// 		{
				// 			loader: 'postcss-loader',
				// 			options: {
				// 				plugins: [ require( 'autoprefixer' ) ]
				// 			}
				// 		},
				// 	],
				// },
				// {
				// 	test: /\.(png|jpg|gif)$/,
				// 	use: [
				// 		{
				// 			loader: 'file-loader',
				// 			options: {
				// 				name: '[name].[ext]',
				// 				outputPath: 'images/'
				// 			}
				// 		}
				// 	]
				// },
			],
		},

		// plugins: [
		// 	new MiniCssExtractPlugin({
		// 		filename: 'style.css',
		// 		chunkFilename: '[id].css'
		// 	})
		// ],

	}
};
