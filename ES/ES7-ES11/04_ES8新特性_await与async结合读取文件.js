//引入fs
const fs = require('fs')

//读取 为学
function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile('../ES6/resource/为学.md', (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

//读取 插秧诗
function readChaYang() {
    return new Promise((resolve, reject) => {
        fs.readFile('../ES6/resource/插秧诗.md', (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

//读取 观书有感
function readGuanshu() {
    return new Promise((resolve, reject) => {
        fs.readFile('../ES6/resource/观书有感.md', (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

//声明async函数
async function main() {
    //获取为学内容
    let weixue = await readWeiXue()
    //获取插秧诗内容
    let chayang = await readChaYang()
    //获取观书有感内容
    let guanshu = await readGuanshu()

    console.log(weixue +'')
    console.log(chayang + '')
    console.log(guanshu + '')
}

main()