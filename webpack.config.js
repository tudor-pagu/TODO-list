const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename : '[name][ext]'

    },
    
    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test:/\.css$/,
                use:[
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env']
                    }
                }
            },
            {
                test : /\.(png|svg|jpg|jpeg|gif)$/i,
                type : 'asset/resource'
            },
        ]
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        watchFiles : ["./src/template.html"],
        historyApiFallback: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html',
        }),

        new MiniCssExtractPlugin({
            filename:"styles.css",
        })
    ],
}
