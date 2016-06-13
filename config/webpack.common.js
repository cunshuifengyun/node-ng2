/**
 * Created by dell6 on 2016/5/30.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './client/polyfills.ts',
        'vendor': './client/vendor.ts',
        'app': './client/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            },

            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },

            {
                test: /\.css$/,
                exclude: helpers.root('client'),
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.css$/,
                include: helpers.root('client'),
                loader: 'raw'
            },


        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'client/index.html'
        })
    ]
};
