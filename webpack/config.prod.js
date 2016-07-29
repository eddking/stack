
var webpack = require('webpack');
var common = require('./common.js');

var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    name: 'production',
    devtool: 'cheap-module-source-map',
    entry: [
        'babel-polyfill',
        './src/app.ts'
    ],
    output: {
        path: common.buildPath,
        filename: "app.js"
    },
    resolve: common.resolve,
    module: {
        loaders: common.javascriptPipeline([
            common.loaders.babel,
            common.loaders.typescript
        ]).concat(common.commonLoaders)
    },
    publicPath: common.publicPath,
    externals: common.externals,
    postcss: common.postcss,
    plugins: [
        new CleanWebpackPlugin([common.buildPath], {
            root: path.resolve(__dirname, "..")
        }),
        new webpack.DefinePlugin({
            __DEVELOPMENT__: false,
            __DEVTOOLS__: false
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new common.ExtractTextPlugin('styles/main.css', {
            disable: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ]
};

