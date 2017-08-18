const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {CheckerPlugin, TsConfigPathsPlugin} = require('awesome-typescript-loader');
const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        app: './sources/src/app',
        bootstrap: 'bootstrap-loader/extractStyles',
        // template: './index.ejs'
    },
    output: {
        path: path.join(__dirname, './public'),
        filename: '[name].js',
        publicPath: './',
    },
    devtool: 'source-map',
    devServer: {
        compress: true,
        inline: true,
        // host: 'localhost',
        port: 8080,
        contentBase: "./public",
        overlay: true,
        // watchContentBase: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            hash: true,
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
        // new webpack.ProvidePlugin({
        //     _: 'lodash'
        // }),
        new CheckerPlugin(),
        new TsConfigPathsPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true,
            ignoreOrder: true,
            disable: false,
        }),
    ],
    performance: {
        hints: false
    },
    resolve: {
        modules: [
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            // {
            //     test: /\.ejs$/,
            //     use: {
            //         loader: 'ejs-loader'
            //     }
            // },
            // {
            //     test: /\.html$/,
            //     use: {
            //         loader: 'html-loader'
            //     }
            // },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'ts-loader?' + JSON.stringify({
                            transpileOnly: true,
                            declaration: true,
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
                use: ['url-loader?name=./resources/fonts/[name].[hash].[ext]&limit=100']
            },
            {
                test: /\.(jpeg|jpg|png|gif)$/i,
                use: ['url-loader?name=./resources/images/[name].[hash].[ext]&limit=100']
            }
        ]
    }
};