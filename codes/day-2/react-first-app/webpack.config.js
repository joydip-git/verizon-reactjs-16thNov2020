const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
/*
const webpackConfigObject = {
    entry: {
        header: path.resolve(__dirname, 'src', 'ReactHeader.js'),
        desc: path.resolve(__dirname, 'src', 'ReactDescription.js'),
        app: {
            dependOn: ['ReactHeader', 'ReactDescription'],
            import: path.resolve(__dirname, 'src', 'App.js')
        },
        main: {
            dependOn: 'App',
            import: path.resolve(__dirname, 'src', 'index.js')
        },
        shared: ['react', 'react-dom']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    devServer: {
        port: 8000,
        contentBase: path.resolve(__dirname, 'build')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['css-loader', 'style-loader']
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpg)$/,
                use: 'file-loader'
            }
        ]
    }
}
*/
const webpackConfigObject = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    devServer: {
        port: 8000,
        contentBase: path.resolve(__dirname, 'build')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['css-loader', 'style-loader']
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpg)$/,
                use: 'file-loader'
            }
        ]
    }
}
module.exports = webpackConfigObject;