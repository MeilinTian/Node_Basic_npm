const { ESRCH } = require('constants')
const express = require('express')
const app = express()
const session = require('express-session')

// 配置 Session 中间件
app.use(session({
    secret: 'keyboard cat', // 可以设置为任意字符串
    resave: false,
    saveUninitialized: true
}))

app.post('/api/login', (req, res) => {
    // 判断用户提交的登录信息是否正确
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({ status: 1, msg: '登录失败'})
    }
    req.session.user = req.body
    req.session.islogin = true

    res.send({ status: 0, msg: '登录成功'})
})

app.get('/api/username', (req, res) => {
    // 判断用户是否登录
    if (!req.session.islogin) {
        return res.send({ status: 1, msg: 'fail'})
    }
    res.send({ status: 0, msg: 'success', username: req.session.user.username })
})

// 托管静态页面
app.use(express.static('./pages'))
// 解析POST提交过来的表单数据
app.use(express.urlencoded({ extended: false }))