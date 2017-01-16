/**
 * Created by Administrator on 10/4/2016.
 */
require('colors');
//see https://github.com/shelljs/shelljs
require('shelljs/global');
var
    webpack = require('webpack'),
    config = require('./webpack.pro.config');
rm('-rf', './dist');
mkdir('-p', 'dist/statics');
console.log('Build start...., Wait a moment.'.green.bold);
webpack(config, function () {
    console.log('Build ended');
});



