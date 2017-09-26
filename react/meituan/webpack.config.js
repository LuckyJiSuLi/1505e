var Webpack = require("webpack")
var htmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path")
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  //path.resolve(__dirname, 'src/my-project-svg-foler'),  // 业务代码本地私有 svg 存放目录
];

module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    
    module: {
        rules: [{
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: svgSpriteDirs,
            },{
                test: /\.jsx|.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: ["html-loader"],

            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader?modules"],
            },
            {
                test: /\.jpg|.png$/,
                use: ["url-loader"]

            },
        ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        host: "localhost",
        port: "9999",
        hot: true,
        contentBase: path.join(__dirname, "routeSrc/static"),
        watchContentBase: true,
        setup: function(app) {
            app.get('/some/path', function(req, res) {
                console.log(11)
                res.json({ custom: '请求到的数据' });
            });
        }
    },
  
    plugins: [
        new Webpack.optimize.UglifyJsPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common"
        }),
        new htmlWebpackPlugin({
            template: "./index.html",

        })

    ]


}