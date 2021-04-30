// 创建 Libraries

const path = require('path')


module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'webpack-numbers.js',
        library:{
            name:'webpacknumber',
            type:'umd' // commonjs AMD 模块支持
        }
    },
    externals:{ // ???? 进一步学习
        lodash:{
            commonjs:'lodash',
            commonjs2:'lodash',
            amd:'lodash',
            root:'_'
        }
    }
}