function express_api() {

    const express = require('express')
    const app = express()

    // 配置URLencoded解析中间件
    app.use(express.urlencoded({extended: false}))

    // 一定要在路由之前，配置 cors 中间件，解决跨域问题
    const cors = require('cors')
    app.use(cors())

    // 导入路由模块
    const router = require('./8-router')
    // 把路由模块注册到app上
    app.use('/api', router)

    // 启动服务器
    app.listen(80, () => {
        console.log('Running Server ...')
    })
}
express_api()