const path = require('path')
const TypedocWebpackPlugin = require('typedoc-webpack-plugin')
const typedocOption = require('./typedocconfig')

// "out" in typedoc option will be considered as relative path from
// output.path of webpack configuration when executing typedoc from webpack.
// So make "out" in typedoc config absolute path.
typedocOption.out = path.join(__dirname, typedocOption.out)

module.exports = {
    entry: {
        Sample: './src/ts/Sample.ts',
    },
    output: {
        path: path.join(__dirname, 'src', 'js'),
        filename: 'sample.js',
        library: 'Sample',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.js', '.styl', '.html']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!typings-for-css-modules-loader?modules&namedExport&camelCase&importLoaders=1&localIdentName=[path][name]__[local]--[hash:base64:5]!stylus-loader'
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.ts$/,
                loader: ['babel-loader', 'ts-loader'],
            }
        ]
    },
    plugins: [
        new TypedocWebpackPlugin(typedocOption, 'src/ts'),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'resources',
        publicPath: '/assets/',
        port: 3000,
        inline: true,
    }
}
