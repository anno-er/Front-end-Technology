//1. 引入express
const { request, response } = require('express');
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO AJAX - 1');
});

//all 可以接收任意类型的请求
/* app.all('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应体
    response.send('HELLO AJAX POST');
}); */



app.all('/json-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = {
        name: 'atguigu'
    }
    //将需要返回的对象进行字符串转换
    let str = JSON.stringify(data)
    //设置响应体
    response.send(str);
});

//针对IE缓存
app.get('/ie', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO IE -3');
});

//超时
app.get('/delay', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        //设置响应体
        response.send('延时响应');
    }, 3000);
});


//.jquery
app.all('/jquery-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头 允许设置响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    //response.send('hello jQuery AJAX')
    const data = { name: 'shangguigu' };
    //response.send(JSON.stringify(data))

    setTimeout(() => {
        //设置响应体
        response.send(JSON.stringify(data))
    }, 1000)

});

//.axios
app.all('/axios-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头 允许设置响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    //response.send('hello jQuery AJAX')
    const data = { name: 'shangguigu' };
    response.send(JSON.stringify(data))
});

//.fetch
app.all('/fetch-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头 允许设置响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    //response.send('hello jQuery AJAX')
    const data = { name: 'shangguigu' };
    response.send(JSON.stringify(data))
});

//jsonp服务
app.all('/jsonp-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //response.send('hello jsonp-server')
    //response.send('console.log("hello jsonp-server")')
    const data = {
        name: '尚硅谷atguigu'
    };
    //将数据转换为字符串
    let str = JSON.stringify(data)

    //返回结果
    response.end(`handle(${str})`)
})

//用户名检测存在 原生
app.all('/check-username', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Header', '*');
    response.setHeader('Access-Control-Allow-Method', '*');
    
    const data = {
        exist:1,
        msg:'用户名已经存在'
    };
    //将数据转换为字符串
    let str = JSON.stringify(data)

    //返回结果
    response.end(`handle(${str})`)
})

//jquery jsonp
app.all('/jquery-jsonp-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    
    const data = {
        name:'尚硅谷',
        city:['北京','上海','深圳']
    };
    //将数据转换为字符串
    let str = JSON.stringify(data)
    //接收callback参数
    let cb = request.query.callback

    //返回结果
    response.end(`${cb}(${str})`)
})

//cors 跨域
app.all('/cors-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    
    response.send('hello cors')
})

//4. 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动, 8000 端口监听中....");
});
