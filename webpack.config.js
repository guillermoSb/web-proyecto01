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
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'  // Use babel with webpack
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|mp4|webp)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new CleanPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            favicon: path.join(__dirname, 'assets/earthfund.svg')
        }),
    ]
}