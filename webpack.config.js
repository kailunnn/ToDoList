const path = require("path");
module.exports = {
		// 建置的模式
    mode: "development", // 預設 production
    // 入口
    entry: "./src/index.js",
    // 輸出
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        historyApiFallback: true
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.m?js$/i,  // 針對 js 檔案
                exclude: /node_modules/,  // 排除第三方套件 
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    }
}