const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: 'images/[name][ext]'
    },
    target: 'web',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'aviasales',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
              test: /\.s[ac]ss$/i,
              use: ["style-loader", "css-loader","sass-loader"],
            },
            {
                test: /\.(ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
              },
          ],
    },
    devServer: {
        hot: true,
        static: './dist',
      },
}