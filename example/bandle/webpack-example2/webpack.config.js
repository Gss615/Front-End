// 一个很简单的，热重载入webpack配置


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// HtmlWebpackPlugin：简化HTML创建，以便webpack打包服务
// 配置参考：https://github.com/jantimon/html-webpack-plugin#configuration


module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map', //源码映射，便于排查错误
  plugins:[
      new HtmlWebpackPlugin({title:'Output Management'})
  ],
  devServer:{ // [npm i webpack-dev-server] 依赖 webpack-dev-server，启动一个服务 
    contentBase:'./dist' // 告诉webpack-dev-server使用 dist 提取文件s
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true // 构建前，清理dist文件。
  },
};