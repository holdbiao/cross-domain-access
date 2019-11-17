// let express = require('express')
let WebSocket = require('ws')

let wss = new WebSocket.Server({ port: 3000 })

wss.on('connection', function (ws) {
    ws.on('message', function (data) {
        console.log(data)
        ws.send('server to html')
    })
})

