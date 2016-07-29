
var express = require('express');

var app = express();

if (process.env.NODE_ENV === 'development') {
    var webpackDevMiddleware = require("webpack-dev-middleware");
    var webpackHotMiddleware = require("webpack-hot-middleware");
    var webpack = require("webpack");
    var config = require("./webpack/config.dev.js");
    var compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.publicPath,
        stats: {colors: true}
    }));
    app.use(webpackHotMiddleware(compiler, {
        dynamicPublicPath: true,
        path: '/__webpack_hmr',
        log: console.log
    }));
} else {
    app.use('/assets', express.static('build'));
}

app.get("*", function (req, resp) {
    var html = '<html>\
    <head>\
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">\
        <script type="text/javascript" src="https://cdn.jsdelivr.net/g/lodash@4.14.0,react@15.2.1(react.min.js+react-dom.min.js),redux@3.5.2"></script>\
    </head>\
    <body>\
        <div id="root"></div>\
        <script type="text/javascript" src="/assets/app.js"></script>\
    </body>\
    </html>';
    resp.send(html);
    resp.status(200);
});

app.listen(8080);
