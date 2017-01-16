/**
 * Created by Administrator on 10/7/2016.
 */

module.exports = {
    pro: {
        env: {
            NODE_ENV: '"production"'
        },
        assetRoot: 'dist',
        assetSubDir: 'statics', //the statics actual keep directory
        publicPath: './'  //the static asset reference  path
    },
    dev: {
        env: {
            NODE_ENV: '"development"',
        },
        assetSubDir: 'statics',
        proxy: {
            '/api': {
                target: {
                    host: 'localhost',
                    protocol: 'http',
                    port: 3000
                }
            }
        }
    }
};