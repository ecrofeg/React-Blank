const webpack = require('webpack'),
    path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    watch: true,

    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        './src/main.js'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },

    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extentions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=react,presets[]=es2015']
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};