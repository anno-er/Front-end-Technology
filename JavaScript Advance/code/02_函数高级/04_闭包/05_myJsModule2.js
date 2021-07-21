(function(){
    //私有的数据，外部无法直接访问
    var msg = 'aa bb c'
    function doSomething(){
        console.log('doSomething() '+ msg.toUpperCase())
    }
    function doOtherthing(){
        console.log('doSomething() '+ msg.toLowerCase())
    }

    //以匿名函数自调用的方式将向外暴露的外部使用方法添加为window属性
    //这种方法更方便，在程序运行时无需程序员调用这个函数，其自己自动会将接口暴露出去
    window.myModule2 = {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
})()