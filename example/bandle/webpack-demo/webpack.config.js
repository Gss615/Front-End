// 入口示例

module.exports = {
    entry:'./src/index.js'
}

module.exports = {
    entry:{
        main:'./src/index.js'
    }
}

module.exports = {
    entry:['./src/index.js']
}

// 对象语法

module.exports = {
    entry:{
        a1:'dependfiles.js',
        b1:{
            debendOn:'a1', // 当前入口文件所依赖的入口文件，且之后加载完依赖文件后才加载当前文件
            import:'./src/app.js'
        },
        c1:{
            runtime:'x1', // 指定运行时模块的名字，默认入口文件名字，且不能和
            import:'./src/c1.js'
            // vendor
        }
    }
}