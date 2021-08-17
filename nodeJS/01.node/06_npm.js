/* 
    通过npm下载的包都放到了node_modules文件下中了
        可以直接通过包名引入即可

    node在使用模块的名字引入模块时，会首先在当前目录的modules中寻找是否含有该模块
    如果有就是用，如果没有则取上一级目录的modules中寻找，如果还没有，还去上一级
    如果找到磁盘的根目录还没找到，就报错
*/
let math = require('math')
console.log(math.add(123,456))
