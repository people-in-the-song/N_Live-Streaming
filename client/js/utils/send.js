import getServer from "../server/server.js"

export default function send() {
    const client = getServer();
    let contentValue = document.querySelector('.contentValue')//获取发送的信息
    let contentButton = document.querySelector('.contentButton')//获取发送按钮
    // 获取聊天框内容
    contentButton.onclick = (msg) => {
        contentButton.userName = contentValue.value
        client.send(contentValue.value)
        
    }
}