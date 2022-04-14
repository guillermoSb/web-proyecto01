const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanPlugin } = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index_bundle-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'  // Use babel with webpack
                }
            },
            {
                test: /\.s?css$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ]
    },
    plugins: [
        new CleanPlugin(),
        new HtmlWebpackPlugin({ template: path.join(__dirname, 'src/index.html') }),
    ]
}