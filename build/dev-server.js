/**
 * Created by moersing on 10/4/2016.
 * This is a simple development environment for webpack,it use webpack-dev-server,Support Hot Replacement.
 */
var
    webpack = require('webpack'),
    webpackDevServer = require('webpack-dev-server'),
    devConfig = require('./webpack.dev.config'),
    config = require('./config');

var
    port = process.env.PORT || 8888;

//HotModuleReplacement
devConfig.entry.unshift('webpack-dev-server/client?http://localhost:' + port + '/', 'webpack/hot/dev-server');

var
    compiler = webpack(devConfig);
var
    sever = new webpackDevServer(compiler, {
        hot: true,
        inline: true,
        clientLogLevel: 'info', //Can be `error`,`warning`,`info` or `none`
        quiet: false,
        noInfo: false,
        historyApiFallback: true,
        stats: {
            colors: true,
            chunks: false
        },
        watchOptions: {
            poll: 500
        },
        cache: true
        // `proxy: config.dev.proxy`
        //if your develop environment need cross-domain, You maybe need this option.
        //Move to `http://webpack.github.io/docs/webpack-dev-server.html#proxying-local-virtual-hosts` see more.
    });
sever.listen(port, function () {
    console.info('open localhost:' + port + '  in your  browser ');
});
