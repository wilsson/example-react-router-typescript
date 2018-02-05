const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/entry.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
     resolve: {
        extensions: ['.js', '.tsx'],
    },
    devtool: 'source-map',
    /*devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        watchContentBase: true,
        historyApiFallback: true
    },*/
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
}