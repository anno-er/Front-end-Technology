/* 
    Buffer(缓冲区)
        - Buffer的结构和数组很像，操作的方法也和数组类似
        - JS中原生的数组性能较差、数组在服务器开发中存在局限性，无法存储二进制文件爱那
        - Buffer就是为了弥补上述不足
        //使用Buffer不需要引入模块，直接使用即可

        - 在Buffer中存储的都是二进制数据，以16进制的形式显示在计算机上
        - Buffer中每一个元素的值范围是00 - ff (0-255)
        - Buffer中一个元素占一个字节（8个bit）
         

*/

/* let str = 'hello 尚硅谷'

//创建一个Buffer
let buf = Buffer.from(str)

console.log(buf)
console.log(buf.length) // 15 buf.length 表示占用内存的大小
console.log(str.length) // 9  str.length 表示字符串的长度


//创建一个指定大小的buffer 
let buf1 = new Buffer(1024) //创建一个1024字节（1kb）的Buffer
console.log(buf1.length)


//Buffer所欲构造函数都过期了，不推荐使用，使用类方法更好
//创建一个10字节的Buffer
let buf2 = Buffer.alloc(10)
console.log(buf2, buf2.length)

//通过索引可以操作Buffer中的元素
buf2[0] = 88
buf2[1] = 255
buf2[2] = 0xaa
buf2[3] = 255


console.log(buf2)
//Buffer大小一旦确定，永远都不能修改，Buffer实际上是对底层内存的直接操作

//只要数字在控制台或者页面中输出，一定是十进制
console.log(buf2[2]) //输出170，而不是0xaa

//如果非要看其他进制，可以用toString方法
console.log(buf2[2].toString(16))


for (let i = 0; i < buf2.length; i++) {
    console.log(buf2[i])
} */


//Buffer.allocUnsafe(size) 创建一个指定大小的Buffer。但是Buffer中可能含有敏感信息
let buf3 = Buffer.allocUnsafe(10)
console.log(buf3)

/*
    Buffer.from(str) 将一个字符串转换为buffer
    Buffer.alloc(size) 创建一个指定大小的Buffer
    Buffer.alloUnsafe(size) 创建一个指定大小的Buffer，但是可能包含敏感数据
    buf.toString() 将缓冲区中的数据转换为字符串
 */

var buf4 = Buffer.from("我是一段文本数据");

console.log(buf4.toString())
