
var webpack = require('webpack');
var common = require('./common.js');
module.exports = {
    name: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client?dynamicPublicPath=true&path=/__webpack_hmr&reload=true',
        './src/app.ts',
    ],
    output: {
        path: common.buildPath,
        filename: "app.js"
    },
    resolve: common.resolve,
    module: {
        loaders: common.javascriptPipeline([
            common.loaders.reactHot,
            common.loaders.babel,
            common.loaders.typescript
        ]).concat(common.commonLoaders)
    },
    publicPath: common.publicPath,
    externals: common.externals,
    postcss: common.postcss,
    plugins: [
        new webpack.DefinePlugin({
            __DEVELOPMENT__: true,
            __DEVTOOLS__: false
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new common.ExtractTextPlugin('styles/main.css', {
            disable: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
