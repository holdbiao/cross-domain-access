let express = require('express')
let app = express()

app.get('/say', (req, res) => {
    let { wd, cb } = req.query
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(`${cb}('后台传给jsonp的数据：${wd}')`)
})

app.listen(3000, function() {
    console.log('listen 3000')
})