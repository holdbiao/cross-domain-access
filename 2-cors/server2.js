let express = require('express')
let app = express()

let whitList = ['http://localhost:3000'] // 跨域白名单

app.use(function (req, res, next) { // 中间件
    console.log(req.headers)
    let origin = req.headers.origin
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    if (whitList.includes(origin)) {
        // 设置那个源可以访问我
        res.setHeader('Access-Control-Allow-Origin', origin) // 允许请求源, 这里写了星号*，凭证不能同时使用
        res.setHeader('Access-Control-Allow-Headers', '*') // 允许所有请求头
        res.setHeader('Access-Control-Allow-Methods', 'PUT') // 允许请求方法；get、post默认支持
        res.setHeader('Access-Control-Allow-Credentials', true) // 允许携带cookie，因为cookie不能跨域访问
        res.setHeader('Access-Control-Max-Age', 10) // 将预检请求的结果缓存10秒钟, 谷歌浏览器默认5秒
        res.setHeader('Access-Control-Expose-Headers', 'resname') // 允许前端获取哪个头, 否则前端报错：Refused to get unsafe header "resname"
        if (req.method === 'OPTIONS') { // put、post等发送的预请求不做处理
            // console.log('OPTIONS 预请求')
            res.end()
        }
        res.setHeader('resname', 'biu-server') // 需允许获取这个头
    }
    next()
})

app.post('/getData', function (req, res) {
    res.end('server2.js 返回的信息')
})

app.listen(4000, function() {
    console.log('listen 4000')
})