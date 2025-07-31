const autoprefixer = require('autoprefixer');

const entry = {
    'css-file-icons': './src/js/app.js',
    'landing': './src/js/landing.js',
};

module.exports = {
    entry,
    mode: 'development',
    target: ['web', 'es5'],
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.html$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        }, {
            test: /\.(jpe?g|png|gif)$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff'
                }
            }
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: {
                loader: "file-loader"
            }
        }],
        noParse: ["jquery"]
    },
    plugins: [
        autoprefixer
    ],
};
