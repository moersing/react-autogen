/**
 * Created by Administrator on 10/4/2016.
 */
var
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    webpackConfig = require('./webpack.base.config'),
    config = require('./config'),
    path = require('path');
//merge baseConfig
module.exports = merge(webpackConfig, {
    module: {
        loaders: [
            {
                test: /\.css|\.scss$/,
                exclude: path.resolve(__dirname, '../node_modules'),  // exclude css of global
                loaders: ['style', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass']
            },
            {
                test: /\.css|\.scss$/,
                include: path.resolve(__dirname, '../node_modules'), //include css of global,because that not requirement handle css modules.
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    devtool: '#eval',
    plugins: [
        ///env variable
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});