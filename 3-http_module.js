// 1. import http module
const http = require('http')

// 2. create web server
function create_server() {
    const server = http.createServer()
    // 1) bind request event, listen requests from client server
    server.on('request', function(req, res) {
        console.log('Someone visit our web server.')
    })
    // 2) run the server
    server.listen(8080, function() {
        console.log('server running at http://127.0.0.1:8080')
    })
}
// create_server()

// 3. introduction to req object
function intro_req() {
    const server = http.createServer()
    // req is request object, for getting data and propositions from client.
    server.on('request', (req) => {
        const str = `Your request url is ${req.url}, and request method is ${req.method}.`
        console.log(str)
    })
    server.listen(80, () => {
        console.log('Server running at http://127.0.0.1:80')
    })
}
// intro_req()

// 4. introduction to res object
function intro_res() {
    const server = http.createServer()
    server.on('request', (req, res) => {
        const str = `Your request url is ${req.url}, and request method is ${req.method}.`
        res.end(str)
    })
    server.listen(80, () => {
        console.log('Server running at http://127.0.0.1 ... ')
    })
}
// intro_res()

// 5. 解决中文乱码问题
function fix_chinese_encode() {
    const server = http.createServer()
    server.on('request', (req, res) => {
        const str = `您请求的地址是${req.url}，请求的方法是${req.method}。`
        res.setHeader('Content-Type', 'text/html; charsest-utf-8') 
        res.end(str)
    })
    server.listen(80, () => {
        console.log('Server running... ')
    })
}
// fix_chinese_encode() 

// 6. 根据不同的网址返回不同的res
function dynamic_request() {
    const server = http.createServer()
    server.on('request', (req, res) => {
        const url = req.url
        let content = '<h1> 404 not found </h1>'
        if (url === '/' || url === '/index.html') {
            content = '<h1> index </h1>'
        } else if (url === '/about.html') {
            content = '<h1> about </h1>'
        }
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(content)
    })
    server.listen(80, () => {
        console.log('Server running... ')
    })
}
dynamic_request()