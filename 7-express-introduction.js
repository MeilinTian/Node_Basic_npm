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
get_params()