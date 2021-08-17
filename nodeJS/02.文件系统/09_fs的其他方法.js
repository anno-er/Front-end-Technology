var fs = require('fs')

/* 
    fs.existsSync(path)
     -检查一个文件是否存在
*/

// var isExists = fs.existsSync('a123.mp3')
// console.log(isExists)

/* 
    fs.statSync(path) 
        获取文件的状态
        它会给我们返回哟个对象，这个对象中保存了当前状态的相关信息
*/
fs.stat('a.mp3',function(err,stat){
    console.log(stat.size)
})

