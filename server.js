
var express = require('express');

var app = express();

if (process.env.NODE_ENV === 'development') {
    var webpackDevMiddleware = require("webpack-dev-middleware");
    var webpackHotMiddleware = require("webpack-hot-middleware");
    var webpack = require("webpack");
    var config = require("./webpack/config.dev.js");
    var compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        hot: true,
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

app.get("/", function (req, resp) {
    var html = '<html>\
    <head></head>\
    <body>\
        <script type="text/javascript" src="/assets/app.js"></script>\
    </body>\
    </html>';
    resp.send(html);
    resp.status(200);
});

app.listen(8080);
