/**
 * Created by moersing on 9/29/2016.
 * This is a basic config for webpack
 */

var
    path = require('path'),
    config = require('./config'),
    root = path.join(__dirname, '../');
var
    htmlWebpackPlugin = require('html-webpack-plugin');

var
    ///resolve asset path
    assetPath = (_path)=> {
        _path = path.posix.join(process.env.NODE_ENV === 'development' ? config.dev.assetSubDir : config.pro.assetSubDir, _path);
        return _path;
    };
module.exports = {
    entry: ['app.js'],
    output: {
        path: root,
        filename: '[name].js'
    },
    resolve: {
        root: [root],
        alias: {
            src: path.resolve(__dirname, '../src'),
            components: path.resolve(__dirname, '../src/components'),
            statics: path.resolve(__dirname, '../src/statics')
        },
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-2'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: assetPath('images/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: assetPath('font/[name].[hash:7].[ext]')
                }
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
};