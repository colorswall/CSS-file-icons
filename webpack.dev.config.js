const path = require('path');
const commonConfig = require('./webpack.common.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const output = {
    path: path.resolve(__dirname, 'build'),
    publicPath: '//localhost:3005/build/',
    filename: '[name].js'
};

const conf = {
    ...commonConfig,
    output,
    plugins: [
        ...commonConfig.plugins,
        new MiniCssExtractPlugin({
            filename: 'css-file-icons.css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
    ],
    devtool: 'source-map',
    module: {
        rules: commonConfig.module.rules.concat({
            test: /\.s?css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: output.publicPath,
                        hmr: process.env.NODE_ENV === 'development',
                    },
                },
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ],
        }, )
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './src',
        port: 3005
    }
}

module.exports = conf;
