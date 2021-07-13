//

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

//定义一个参数，用于向一个元素中添加指定的class属性
/* 
    参数： 
        @obj    要添加class属性的元素
        @cn     要添加的class的名字
*/
function addClass(obj, cn) {
    //检查obj中是否有cn
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
}

//判断一个元素是否含有指定的class
/*
    参数：
        @obj    要判断class属性的元素
        @cn     要判断的class的名字
    返回值
        ture    有
        false   没有
*/
function hasClass(obj, cn) {
    //判断obj.className中有没有cn
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
}

//移除一个元素指定的class
/*
    参数：
        @obj    要移除class属性的元素
        @cn     要移除的class的名字
*/
function removeClass(obj, cn) {
    //创建一个正则表达式
    var reg = new RegExp("\\b" + cn + "\\b");
    //删除，用replace()函数以空串替换cn
    obj.className = obj.className.replace(reg, "");
}

//切换一个元素指定的class
/* 
    如果元素中具有该类，则删除
    如果元素中没有该类，则添加
 
    参数：
        @obj    要移除class属性的元素
        @cn     要移除的class的名字
*/
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }
}


//切换高度的动画效果
