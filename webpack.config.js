const path = require('path');
const commonConfig = require('./webpack.common.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('style.css');

const output = {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'https://colorswall.github.io/CSS-file-icons/build/',
    filename: 'bundle.js'
};

const conf = {
    ...commonConfig,
    ...{
        output: output,
        module: {
            loaders: [
                ...commonConfig.module.loaders,
                {
                    test: /\.s?css$/,
                    exclude: /(node_modules)/,
                    loader: extractCSS.extract('style', 'css!postcss!sass')
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