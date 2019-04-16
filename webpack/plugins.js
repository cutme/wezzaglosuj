const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _webpack = require('webpack');

const HotModuleReplacementPlugin = new _webpack.HotModuleReplacementPlugin();



const css = new HappyPack({
    id: 'scss',
    threadPool: happyThreadPool,
    use: [
        {
            loader: 'style-loader',
        },

        {
            loader: 'css-loader',
            options: {
                minimize: true,
                sourceMap: true,
                importLoader: 2
            }
        },

        {
            loader: 'postcss-loader',
            options: {
                sourceMap: true
            }
        },

        {
            loader: 'sass-loader'
        }
    ]
});

const js = new HappyPack({
    id: 'js',
    threadPool: happyThreadPool,
    loaders: ['babel-loader']
});

const jQuery = new _webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
});

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
    filename: "css/style.css",
    chunkFilename: "[name].css"
});


module.exports = {
    css: css,
    jQuery: jQuery,
    js: js,
    HotModuleReplacementPlugin: HotModuleReplacementPlugin,
    MiniCssExtractPlugin: MiniCssExtractPlugin
};
