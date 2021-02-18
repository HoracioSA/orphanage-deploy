const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
module.exports={
mode: 'development',
    entry: {
        app: path.resolve(__dirname, 'src', 'index.tsx')
    },
    devtool: false,
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use:[{
                  loader:"awesome-typescript-loader",
                }],
                exclude: /node_modules/,
              },
              {
    
                test: /\.js$/,
                use: ["source-map-loader"],
              },
              {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader',]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name: "[name].[hash:5].[ext]",
                            outputPath:"src/images",
                            publicPath:"images"
                        }
                }
                ]
            },
            {
                test: /\.svg$/i,
                loader: "svg-loader",
                options: {
                    modules: true,
                }
            },
            {
                test: /\.html$/i,
                use: [{
                    loader:"html-loader",
                }]
            }
              
        ],
        
    },
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'build'),
    },
    plugins: [new HtmlWebpackPlugin({
        template: "public/index.html",
    }), 
     new MiniCssExtractPlugin(),
     new Dotenv()
],

}