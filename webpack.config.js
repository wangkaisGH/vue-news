/**
 * Created by Administrator on 2017-8-5.
 */
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:path.resolve(__dirname,'src/js/main.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        //publicPath:process.env.NODE_ENV ==='production'?config.build.assetsPublicPath:config.dev.assetsPublicPath
    },
    module:{
    	rules:[
    		{test:/\.css$/,use:['style-loader','css-loader']},
    		{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
    		{test:/\.(png|gif|jpg)$/,use:'url-loader'},
    		{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'},
    		{test:/\.(ttf|woff|woff2|eot|svg)$/,use:'url-loader'},
    		{test:/vue-preview.src.*?js$/,loader:'babel-loader'},
    		
    	]
    },
    devServer:{
//      contentBase: path.resolve(__dirname,"dist"),//本地服务器所加载的页面所在的目录
        hot:true,
        open:true,
        port:3001,
        inline:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.resolve(__dirname,'src/index.html'),
            filename:'index.html'
        })
    ]
}
