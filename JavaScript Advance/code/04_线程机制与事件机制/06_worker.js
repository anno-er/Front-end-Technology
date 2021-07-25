function fibonacci(number) {
    return number <= 2 ? 1 : fibonacci(number - 1) + fibonacci(number - 2)
}
var onmessage = function (event) {
    var number = event.data
    console.log('分线程接收到主线程发送的数据：', number)
    var result = fibonacci(number)
    postMessage(result)
    console.log('分线程向主线程返回数据',result)
    //alert(result) //分线程alert不能调用，是window的方法，分线程中没有window
    //分线程的全局对象不再是window，所以在分线程中不能更新界面
    
}