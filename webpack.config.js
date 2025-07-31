const path = require('path');
const commonConfig = require('./webpack.common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const output = {
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
    filename: '[name].js'
};

const conf = Object.assign(commonConfig, {
    output,
    plugins: [
        ...commonConfig.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
    ],
    module: {
        rules: commonConfig.module.rules.concat({
            test: /\.s?css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: output.publicPath
                    },
                },
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ],
        }, )
    },
    optimization: {
        concatenateModules: true,
        minimize: true,
        minimizer: [
            '...',  // This extends existing minimizers (i.e. `terser-webpack-plugin`)
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            }),
        ],
    },
});

module.exports = conf;
