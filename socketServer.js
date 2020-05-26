// 服务器
const ws = require('ws')
const port = 8080
const host = '10.31.160.42'
const server = new ws.Server({
    port,
    host
})
let count = 90000
let clients = []
//获取客户端进行编号 然后存储他
server.on('connection', client => {
    client.name = ++count
    clients[client.name] = client
    // 获取数据
    client.on('message', msg => {
        msg.name = client.name
        console.log(msg.toString())
        boradcast(msg)
        console.log(clients)
    })
})
function boradcast (msg) {
    for(let key in clients ){
      clients[ key ].send(msg.toString())
    }
  }

server.on('listening', () => {
    console.log(`服务器连接成功`)
})