
var webpack = require('webpack');
var common = require('./common.js');
module.exports = {
    name: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client?dynamicPublicPath=true&path=/__webpack_hmr',
        './src/app.ts',
    ],
    output: {
        path: common.buildPath,
        filename: "app.js"
    },
    resolve: common.resolve,
    module: {
        loaders: common.loaders
    },
    publicPath: common.publicPath,
    externals: common.externals,
    postcss: common.postcss,
    plugins: [
        new webpack.DefinePlugin({
            __DEVELOPMENT__: true,
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
