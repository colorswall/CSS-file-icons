const ProvidePlugin = require('webpack').ProvidePlugin;
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: [,
        './src/js/app.js'
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel'
        }, {
            test: /\.html$/,
            loader: 'file?name=[name].[ext]'
        }]
    },
    postcss: function() {
        return [autoprefixer];
    }
};