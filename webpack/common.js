var path = require('path');
var fs = require('fs');

var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var buildPath = path.resolve(__dirname, "..", "build");

var commonLoaders = [
    {
        test: /\.tsx?$|\.js$/,
        loader: combineLoaders([
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-decorators-legacy']
                }
            },
            {
                loader: 'ts-loader'
            }
        ]),
        include: path.join(__dirname, '..', 'src'),
        exclude: path.join(__dirname, '..', 'node_modules')
    },
    { test: /\.json$/, loader: 'json-loader' },
    { test: /\.html$/, loader: 'html-loader' },
    {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url',
        query: {
            name: '[hash].[ext]',
            limit: 10000
        }
    },
    {
        test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract(
            'style-loader',
            ['css-loader?modules&sourceMap', 'postcss-loader', 'sass-loader?sourceMap'])
    }
];

function postCss() {
    return [
        require('postcss-normalize'),
        require('postcss-cssnext')({
            browsers: ['last 2 versions', 'IE > 8']
        })
    ];
}

var externals = {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'lodash': '_',
    'redux': 'Redux'
}

module.exports = {
    buildPath: buildPath,
    loaders: commonLoaders,
    externals: externals,
    resolve: {
        extensions: ['', '.ts','.tsx', '.js'],
        modulesDirectories: ["src", "node_modules"]
    },
    publicPath: '/assets',
    postcss: postCss,
    ExtractTextPlugin: ExtractTextPlugin
};
