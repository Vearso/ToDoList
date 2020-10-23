const path = require("path");
const entryPath = './';

const autoprefixer = require('autoprefixer');
const Html = require('html-webpack-plugin');
const MiniCSS = require("mini-css-extract-plugin");

module.exports = {
    entry: `./${entryPath}/js/app.js`,
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `${entryPath}/build`)
    },
    devServer: {
        contentBase: path.join(__dirname, `${entryPath}`),
        publicPath: "/build/",
        compress: true,
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                          //  plugins: () => [autoprefixer()]
                        }
                    },
                    'sass-loader']
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: "/images/",
                    outputPath: "/images/"
                }
            }

        ]
    },
    plugins: [
        new Html({
            filename: "index.html",
            template: `./${entryPath}/index.html`
        }),
        new MiniCSS({
            filename: "app.css",
        })
    ]
};
