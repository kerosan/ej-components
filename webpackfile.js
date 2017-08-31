const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {CheckerPlugin, TsConfigPathsPlugin} = require('awesome-typescript-loader');
const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        components: './sources/src/components',
        bootstrap: 'bootstrap-loader/extractStyles',
    },
    output: {
        path: path.join(__dirname, './public'),
        filename: '[name].js',
        publicPath: './',
    },
    devtool: 'eval',
    devServer: {
        compress: true,
        inline: false,
        host: 'localhost',
        hot: true,
        port: 8080,
        contentBase: "./public",
        overlay: true,
        watchContentBase: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            // hash: true,
            title: 'EJ Components',
            template: path.resolve(__dirname, './index.ejs'),
            filename: 'index.html',
            cache: false,
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackHarddiskPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            __DEV__: 'true'
        }),
        new CheckerPlugin(),
        new TsConfigPathsPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
    ],
    resolve: {
        modules: [
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'awesome-typescript-loader?' + JSON.stringify({
                            transpileOnly: true,
                        })
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                }
                            }, {
                                loader: 'resolve-url-loader'
                            }, {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true,
                                    includePaths: ['style']
                                }
                            }
                        ],
                    }
                )
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.otf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: ['url-loader?name=./resources/fonts/[name].[ext]&limit=100']
            },
            {
                test: /\.(jpeg|jpg|png|gif)$/i,
                use: ['url-loader?name=./resources/images/[name].[ext]&limit=100']
            }
        ]
    }
};
