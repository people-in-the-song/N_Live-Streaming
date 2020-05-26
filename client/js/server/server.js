
export default function getServer(){

    // 连接服务器
const port = 8080
const host = '10.31.160.42'
const serverURL = `ws://${host}:${port}`
const client = new WebSocket(serverURL)
    return client;
}