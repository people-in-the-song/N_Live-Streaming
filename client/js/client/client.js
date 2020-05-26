// 获取服务端的信息，然后展示到界面上
import getServer from '../server/server.js'
const client =getServer()
const ul = document.querySelector(".wrapper>ul");
export default function (){
    client.onmessage = function ( msg ) {
        console.log( msg )
        const li = document.createElement('LI')
        const p = document.createElement('P')
        p.innerHTML = window.userName;
        li.innerHTML = msg.data
        li.prepend(p)
        ul.appendChild(li)
    }
}
