const path = require('path');
const commonConfig = require('./webpack.common.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('style.css');

const output = {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'http://localhost:3005/build/',
    filename: 'bundle.js'
};

const conf = {
    ...commonConfig,
    ...{
        output: output,
        devtool: 'source-map',
        module: {
            loaders: [
                ...commonConfig.module.loaders, {
                    test: /\.s?css$/,
                    exclude: /(node_modules)/,
                    loader: extractCSS.extract('style', 'css?sourceMap!postcss?sourceMap!sass?sourceMap')
                }
            ]
        },
        plugins: [
            extractCSS
        ],
        devServer: {
            historyApiFallback: true,
            contentBase: './src',
            port: 3005
        }
    }
};

module.exports = conf;