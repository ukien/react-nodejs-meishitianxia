/**
 * Created by Administrator on 2017/2/5.
 */
var webpack = require("webpack");
var path = require("path")

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        "./src/client/index.js"
    ],
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                include: path.join(__dirname,"src"),
                loader:["react-hot-loader","babel-loader?presets[]=es2015&presets[]=react"]
            }
        ]
    },
    resolve:{
        extensions:[".js",".jsx"]
    },
    output:{
        path:__dirname + "/public/js",
        filename:"bundle.js",
        publicPath:"http://localhost:8080/js"
    },
    devServer:{
        contentBase:"./public",
        hot:true,
        host:"localhost",
        proxy:{
            "*":"http://localhost:"+80
        }
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]

}