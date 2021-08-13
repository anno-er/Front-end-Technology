/* 原始方式 */

//引入fs模块 
const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path/posix')

/* fs.readFile('../resource/为学.md', (err, data1) => {
    fs.readFile('../resource/插秧诗.md', (err, data2) => {
        fs.readFile('../resource/观书有感.md', (err, data3) => {
            let result = data1 + '\r\n' + data2 + '\r\n' + data3
            console.log(result)
        })
    })
}) */

//使用Promise 实现
const p = new Promise((resolve, reject) => {
    fs.readFile('../resource/为学.md', (err, data) => {
        resolve(data)
    })
})
p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('../resource/插秧诗.md', (err, data) => {
            resolve([value,data])
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('../resource/观书有感.md', (err, data) => {
            //压入
            value.push(data)
            resolve(value)
        })
    })
}).then(value=>{
    console.log(value.join('\r\n'))
})