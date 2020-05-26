//展示界面的服务器

const express=require('express')
const path=require('path')
const app=express() //连接服务器
const PORT=8000
const HOST_NAME="10.31.160.42"
//指定展示的界面  指定静态资源目录
app.use(express.static(path.join(__dirname,'./client')))

app.listen(PORT,HOST_NAME,()=>{
    console.log(`网页展示的url页面是:http://${HOST_NAME}:${PORT}`)
})