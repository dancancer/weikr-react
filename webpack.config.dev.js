/**
 * Created by xupeng on 15/12/10.
 */

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:3000',
        'webpack/hot/only-dev-server',
        './src/js/app.jsx'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: "/build/",
        filename: '[name].debug.js'
    },
    module: {
        loaders: [
            {
                test: /.(js|jsx)?$/,
                include: path.join(__dirname, 'src'),
                loaders: ['react-hot','babel?presets[]=react&presets[]=es2015'],
            },
            { test: /\.css$/,  loader: 'style!css' },
            { test: /\.scss$/, include: path.join(__dirname, 'src/css'), loader: 'style!css!postcss-loader!sass?outputStyle=expanded' }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()

    ],
    devtool:'eval-source-map',
    postcss: function () {
        return [autoprefixer, precss];
    }
};
