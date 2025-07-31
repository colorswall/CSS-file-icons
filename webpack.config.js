const path = require('path');
const commonConfig = require('./webpack.common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const output = {
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
    filename: '[name].js'
};

const terserOptions = {
    format: {
        comments: false,
    },
};

const TerserPlugin = require('terser-webpack-plugin');

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
        rules: commonConfig.module.rules.concat(
            {
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: output.publicPath
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            warnRuleAsWarning: true,
                            sassOptions: {
                                outputStyle: 'compressed',
                                quietDeps: true,
                                logger: {
                                    warn: function(message, options) {
                                        if (!message.includes('legacy')) {
                                            console.warn(message);
                                        }
                                    }
                                }
                            }
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: output.publicPath
                        },
                    },
                    'css-loader',
                    'postcss-loader'
                ],
            }
        )
    },
    optimization: {
        concatenateModules: true,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
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
