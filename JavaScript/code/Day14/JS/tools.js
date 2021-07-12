function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    }
    else if (obj.currentStyle) {
        return obj.currentStyle[name];
    }
    else {
        alert("Missing Method");
        return false;
    }
}
/* 
    目前我们的定时器标识由全局变量timer保存，所有的定时器都由他保存
    不能这样使用
*/
//var timer; 

//丰富函数的功能
/* 
    参数
        @obj 执行动画的对象
        @attr 要执行动画的样式 ,比如left,width,top
        @target 动画的目标位置
        @speed 执行动画的速度
        @callback 回调函数，将会在动画执行结束后执行

*/
function move(obj, attr, target, speed, callback) {

    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj, attr));
    if (current > target) {
        speed = -speed;
    }
    //向执行动画的对象中添加一个timer属性，用于保存它自己的定时器标识
    obj.timer = setInterval(function () {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }
        obj.style[attr] = newValue + "px";
        if (newValue == target) {
            clearInterval(obj.timer);
            //动画执行完毕，调用回调函数
            callback && callback(); //如果有就执行，如果没有就不执行
        }
    }, 30)
}