// 导入express
const express = require('express')

// 1. 创建web服务器
function create_server() {
    const app = express()
    app.listen(80, () => {
        console.log('Express server dunning at http://127/0.0.1')
    })
}
// create_server()

// 2. GET | POST | send
function response() {
    const app = express()
    app.get('/user', (req, res) => {
        res.send({name: 'lily'})
    })
    app.post('/user', (req, res) => {
        res.send('success')
    })
    app.listen(80, () => {
        console.log('Express server running....')
    })
}
// response()

// 3. req.query
function query() {
    const app = express()
    app.get('/', (req, res) => {
        console.log(req.query)
        res.send(req.query)
    })
    app.listen(80, () => {
        console.log('Express server running ...')
    })
}
// query()

// 4. req.params
function get_params() {
    const app = express()
    app.get('/:id', (req, res) => {
        console.log(req.params)
        res.send(req.params)
    })
    app.listen(80, () => {
        console.log('Express server running ...')
    })
}
// get_params()

// 5. express 模块化路由
function module_app() {
    const userRouter = require('./7-router.js')
    const app = express()
    // 使用app.use() 注册路由模块
    app.use(userRouter)
    app.listen(80, () => {
        console.log('running at http://127.0.0.1 ...')
    })
}
// module_app()

// 6. 中间件函数
function middleware() {
    const app = express()
    // 定义一个最简单的中间件函数
    const mw = function(req, res, next) {
        console.log('中间件函数')
        next()
    }
    app.listen(80, () => {
        console.log('running at hettp://127.0.0.1')
    })
}
// middleware()

// 7. 全局生效的中间件
function global_middleware() {
    const app = express()
    const mw = function(res, req, next) {
        console.log('全局中间件函数')
        next()
    }
    app.use(mw)
    app.get('/', (req, res) => {
        res.send('Home page')
    })
    app.get('/user', (req, res) => {
        res.send('User page')
    })
    app.listen(80, () => {
        console.log('Running at http://127.0.0.1 ... ')
    })
}
// global_middleware()

// 8. 连续定义多个全局中间件
function multi_global_middleware() {
    const app = express()
    app.use(function(req, res, next) {
        console.log('first one')
        next()
    })
    app.use(function(req, res, next) {
        console.log('second one')
        next()
    })
    app.get('/user', (req, res) => {
        res.send('Home page.')
    })
    app.listen('80', () => {
        console.log('Running at http://127/0/0/1 ...')
    })
}
// multi_global_middleware()

// 9. 局部生效的中间件
function local_middleware() {
    const app = express()
    const mw = function(req, res, next) {
        console.log('middleware')
        next()
    }
    app.get('/', mw, function(req, res) {
        res.send('Home page.')
    })
    app.get('/user', function(req, res) {
        res.send('User page')
    })
    app.listen('80', () => {
        console.log('Running at http://127.0.0.1 ...')
    })
}
// local_middleware()

// 10. 错误级别的中间件
function err_middleware() {
    const app = express()
    app.get('/', function(req, res) {
        throw new Error('服务器内部发生了错误！')
        res.send('Home Page.')
    })
    app.use(function(err, req, res, next){
        console.log('发生了错误：' + err.message)
        res.send('Error!' + err.message)
    })
    app.listen('80', () => {
        console.log('Running ...')
    })
}
// err_middleware()

// 11. 自定义中间件
function self_defined_middleware() {
    const app = express()
    const qs = require('querystring')

    app.use((req, res, next) => {
        // 定义中间件具体逻辑
        // 1. 定义一个str字符串，专门用来储存客户端发来的请求体
        let str = ''
        // 2. 监听 req 的 data事件
        req.on('data', (chunk) => {
            str += chunk
        })
        
        // 3. 监听 req 的 end 事件
        req.on('end', () => {
            // console.log(str) 
            const body = qs.parse(str)
            req.body = body
            next()
        })

    })

    app.post('/user', (req, res) => {
        res.send(req.body)
    })

    app.listen('80', () => {
        console.log('Running...')
    }) 
}
self_defined_middleware()