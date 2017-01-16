/**
 * Created by Administrator on 10/4/2016.
 */
var
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    path = require('path'),
    config = require('./config'),
    webpackConfig = require('./webpack.base.config');
var
    //extract css
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    extractCss = new ExtractTextPlugin(path.posix.join(config.pro.assetSubDir, 'css/[name].[contenthash].css'));

//merge baseConfig
module.exports = merge(webpackConfig, {
    output: {
        path: config.pro.assetRoot,
        filename: path.posix.join(config.pro.assetSubDir, 'js/[name].[hash].js'),
        publicPath: config.pro.publicPath
    },
    module: {
        loaders: [
            {
                test: /\.css|\.scss$/,
                exclude: path.resolve(__dirname, '../node_modules'),  // exclude css of global
                loader: extractCss.extract(['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass'])
            },
            {
                test: /\.css|\.scss$/,
                include: path.resolve(__dirname, '../node_modules'), //include css of global,because that not requirement handle css modules.
                loader: extractCss.extract(['css', 'sass'])
            }
        ]
    },
    plugins: [
        ///env variable
        new webpack.DefinePlugin({
            'process.env': config.pro.env
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: function (module) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        extractCss
    ]
});