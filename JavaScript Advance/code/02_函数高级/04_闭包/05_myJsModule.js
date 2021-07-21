function myModule(){
    //私有的数据，外部无法直接访问
    var msg = 'aa bb c'
    function doSomething(){
        console.log('doSomething() '+ msg.toUpperCase())
    }
    function doOtherthing(){
        console.log('doSomething() '+ msg.toLowerCase())
    }

    //向外暴露给外部使用的方法
    return {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
}