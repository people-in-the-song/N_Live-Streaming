import getServer from "../server/server.js"
export default function getUserName() {
    let userName = document.querySelector('.userValue') //获取登录者的用户名
    let userButton = document.querySelector('.userButton')//获取登录按钮
    let client = getServer()

    //获取进入聊天室登录名称
    userButton.onclick = () => {
        console.log(userName.value)
        client.onopen = function () {
            client.send(`${userName.value}进来直播间`)
        }
        return
    }
}