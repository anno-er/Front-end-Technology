'use strict';

/* 原始方式 */

//引入fs模块 
var _require = require('assert'),
    rejects = _require.rejects;

var fs = require('fs');

var _require2 = require('path/posix'),
    resolve = _require2.resolve;

/* fs.readFile('../resource/为学.md', (err, data1) => {
    fs.readFile('../resource/插秧诗.md', (err, data2) => {
        fs.readFile('../resource/观书有感.md', (err, data3) => {
            let result = data1 + '\r\n' + data2 + '\r\n' + data3
            console.log(result)
        })
    })
}) */

//使用Promise 实现


var p = new Promise(function (resolve, reject) {
    fs.readFile('../resource/为学.md', function (err, data) {
        resolve(data);
    });
});
p.then(function (value) {
    return new Promise(function (resolve, reject) {
        fs.readFile('../resource/插秧诗.md', function (err, data) {
            resolve([value, data]);
        });
    });
}).then(function (value) {
    return new Promise(function (resolve, reject) {
        fs.readFile('../resource/观书有感.md', function (err, data) {
            //压入
            value.push(data);
            resolve(value);
        });
    });
}).then(function (value) {
    console.log(value.join('\r\n'));
});