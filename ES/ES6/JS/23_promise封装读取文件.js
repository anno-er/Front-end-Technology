//1.引入fs模块
const fs = require('fs')

//2.调用方法读取文件
/* fs.readFile('../resource/为学.md',(err,data)=>{
    //如果失败，则抛出错误
     if (err) throw err
    //如果正确，输出结果
    console.log(data)
    console.log(data.toString())
}) */

//使用Promise封装
const p = new Promise(function(resolve,reject){
    fs.readFile('../resource/为学.md',(err,data)=>{
        if(err) reject(err)
        //如果成功
        resolve(data)
    })
})

p.then(function(value){
    console.log(value.toString())
},function(reason){
    console.log(`读取失败`)
})
console.log(1111)