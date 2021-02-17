const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
module.exports={
    mode:'development',

    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use:[{
                  loader:'ts-loader',
                  options: { allowTsInNodeModules: true }
                }],
                exclude: /node_modules/,
              },
              {
                test: /\.css$/i,
                loader: "css-loader",
                options: {
                  modules: true,
                },
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                          mimetype: 'image/png',
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
            }
              
        ],
        
    },
    // devServer: {
    //   contentBase: "./build",
    // },
    // plugins: [
    //   new HtmlWebpack({
    //     template: path.resolve('./index.html'),
    //   }),
    // ],
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'build'),
    }
}