const path = require('path');
const commonConfig = require('./webpack.common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const output = {
    path: path.resolve(__dirname, 'build'),
    publicPath: '//localhost:3005/build/',
    filename: '[name].js'
};

const terserOptions = {
    format: {
        comments: false,
    },
};

const TerserPlugin = require('terser-webpack-plugin');

const conf = {
    ...commonConfig,
    output,
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            })
        ]
    },
    plugins: [
        ...commonConfig.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
    ],
    devtool: 'source-map',
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
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'src')
        },
        port: 3005,
        hot: true
    }
}

module.exports = conf;
