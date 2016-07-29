var path = require('path');
var fs = require('fs');

var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var buildPath = path.resolve(__dirname, "..", "build");

var babelLoader = {
    loader: 'babel-loader',
    query: {
        presets: ['es2015'],
        plugins: ['transform-decorators-legacy']
    }
};

var reactHotLoader = {
    loader: 'react-hot'
};

var typescriptLoader = {
    loader: 'ts-loader'
};

// combine the selected loaders into one
// in development we dont want to use the reac-hot
function javascriptPipeline(loaders) {
    return [{
        test: /\.tsx?$|\.js$/,
        loader: combineLoaders(loaders),
        include: path.join(__dirname, '..', 'src'),
        exclude: path.join(__dirname, '..', 'node_modules')
    }];
}

var commonLoaders = [
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

// Currently not used.
// we dont have the flexibility to make this work the dev tools
// TODO: branch the config so this applies to produciton only
var externals = {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'lodash': '_',
    'redux': 'Redux'
};

module.exports = {
    buildPath: buildPath,
    loaders: {
        babel: babelLoader,
        reactHot: reactHotLoader,
        typescript: typescriptLoader
    },
    javascriptPipeline: javascriptPipeline,
    commonLoaders: commonLoaders,
    externals: [],
    resolve: {
        extensions: ['', '.ts','.tsx', '.js'],
        modulesDirectories: ["src", "node_modules"]
    },
    publicPath: '/assets',
    postcss: postCss,
    ExtractTextPlugin: ExtractTextPlugin
};
