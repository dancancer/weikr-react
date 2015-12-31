/**
 * Created by xupeng on 15/12/10.
 */

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss       = require('precss');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app:'./src/js/app.jsx',

    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: "/build/",
        filename: '[name].min.js'
    },
    module: {
        loaders: [
            {
                test: /.(js|jsx)?$/,
                include: path.join(__dirname, 'src'),
                loaders: ['babel?presets[]=react&presets[]=es2015'],
            },

            //{ test: /\.css$/,  loader: 'style!css' },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src/css'),
                loader: ExtractTextPlugin.extract('style-loader','css-loader!postcss-loader!sass-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        })
    ],
    postcss: function () {
        return [autoprefixer, precss];
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
