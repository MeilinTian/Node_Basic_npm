const express = require('express')
const router = express.Router()

// 在这里挂载对应的路由
router.get('/get', (req, res) => {
    // 通过 req.query 获取客户端发送的数据
    const query = req.query 
    // 调用 res.send() 方法，向客户端响应结果
    res.send({
        status: 200,
        msg: 'GET请求成功',
        data: query // 需要相应给客户端的数据
    })
})

router.post('/post', (req, res) => {
    const body = req.body
    res.send({
        status: 200,
        msg: 'POST请求成功',
        data: body
    })
})

module.exports = router