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

        stats.size表示文档的大小
        stats.isDirectory() 是否是一个文件夹
        stats.isFile() 是否是一个文件
        ....
*/
/* fs.stat('a.mp3', function (err, stat) {
    console.log(stat.size)
})
 */

/*
    fs.unlink(path,callback)
    fs.unlinkSync(path)
        -删除文件
*/

// fs.unlinkSync('hello.txt')

/*
    fs.readdir(path[, options], callback)
    fs.readdirSync(path[, options])
        -读取一个目录的目录结构
         files是一个字符串数组，每一个元素就是一个文件夹或者文件的名字
*/
// fs.readdir('.',function(err,files){
//     if(!err){
//         console.log(files)
//     }
// })


/* 
    fs.truncate(path[, len], callback)
    fs.ftruncateSync(fd[, len])
        -截断文件 将文件修改为指定的大小
*/
// fs.truncateSync('hello2.txt',10)

/* 
    fs.mkdir(path[, options], callback)
    fs.mkdirSync(path[, options])
        -创建一个文件夹目录
*/
// fs.mkdirSync('hello')


/* 
    fs.rmdir(path[, options], callback)
    fs.rmdirSync(path[, options])
*/
// fs.rmdirSync('hello')


/* 
    fs.rename(oldPath, newPath, callback)
    fs.renameSync(oldPath, newPath)
        -对文件进行重命名
        -参数
            oldPath 旧路径
            newPath 新路径
*/
// fs.rename('a.mp3','笔记.mp3',function(err){
//     if(!err){
//         console.log("修改成功")
//     }else{'修改失败'}
// })

/* 
    fs.watchFile(filename[, options], listener)
        - 监视文件的修改
        - 参数
            fileName : 要监视的文件的名字
            option : 配置选项
            listener : 文件发生变化时执行的回调函数
                在回调函数中有两个参数
                    curr 当前文件的状态
                    prev 修改后的文件的状态
                    这两个对象都是stats对象
*/

fs.watchFile('hello2.txt',{interval:5000},function(curr,prev){
    console.log('修改前文件大小',prev.size)
    console.log('修改后文件大小',curr.size)
})

