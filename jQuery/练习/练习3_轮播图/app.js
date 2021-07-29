/*
 功能说明:
 1. 点击向右(左)的图标, 平滑切换到下(上)一页
 2. 无限循环切换: 第一页的上一页为最后页, 最后一页的下一页是第一页
 3. 每隔3s自动滑动到下一页
 4. 当鼠标进入图片区域时, 自动切换停止, 当鼠标离开后,又开始自动切换
 5. 切换页面时, 下面的圆点也同步更新
 6. 点击圆点图标切换到对应的页
 */

$(function () {
    var $container = $('#container')
    var $list = $('#list')
    var $points = $('#pointsDiv>span')
    var $prev = $('#prev')
    var $next = $('#next')
    var PAGE_WIDTH = 600
    var TIME = 400  //翻页动画的持续时间
    var ITEM_TIME = 20  //单元移动的间隔时间
    var imageCount = $points.length
    var index = 0
    var moving = false //标识是否正在翻页，默认没有

    //1. 点击向右(左)的图标, 平滑切换到下(上)一页
    $next.click(function () {
        //平滑翻到下一页
        nextPage(true)
    })
    $prev.click(function () {
        //平滑翻到上一页
        nextPage(false)
    })

    //3. 每隔3s自动滑动到下一页
    var intervalID = setInterval(function () {
        nextPage(true)
    }, 1000)

    //当鼠标进入图片区域时, 自动切换停止, 当鼠标离开后,又开始自动切换
    $container.hover(function () {
        //清除定时器
        clearInterval(intervalID)
    }, function () {
        intervalID = setInterval(function () {
            nextPage(true)
        }, 1000)
    })

    //6. 点击圆点图标切换到对应的页
    $points.click(function () {
        //目标页的下标
        var targetIndex = $(this).index()
        //只有当点击的不是当前页的圆点值才翻页
        if (targetIndex != index) {
            nextPage(targetIndex)
        }
    })

    /* 
        平滑翻页函数
        @Param next
            true: 下一页
            false: 上一页
            数值： 指定下标页
    */
    function nextPage(next) {
        /* 
            总的偏移量 offset
            总的时间 TIME
            单元移动的间隔时间 ITEM_TIME
            单元移动的偏移量 itemOffset = offset / (TIME/ITEM_TIME)

            启动循环定时器不断更新$list的left，到达目的时停止定时
        */

        //如果正在翻页，直接结束
        if(moving){ //已经正在翻页中
            return 
        }
        moving = true //标识正在翻页
        var offset = 0
        //计算offset
        if (typeof next === 'boolean') {
            offset = next ? -PAGE_WIDTH : PAGE_WIDTH
        }
        else {
            offset = -(next - index) * PAGE_WIDTH
        }

        //单元移动的偏移量 
        var itemOffset = offset / (TIME / ITEM_TIME)
        //得到当前left
        var currentLeft = $list.position().left
        //计算目标出的left
        var targetLeft = currentLeft + offset
        //启动循环定时器不断更新$list的left，到达目的时停止定时
        var intervalID = setInterval(function () {
            //计算最新的currentLeft
            currentLeft += itemOffset

            if (currentLeft === targetLeft) {
                clearInterval(intervalID)

                //翻页停止
                moving = false

                //如果到达最右边图片（1.jpg），应跳转至最左边的第二张（1.jpg）
                //如果到达最左边图片（5.jpg），应跳转至最右边的第二张（5.jpg）

                if (currentLeft === -(imageCount + 1) * PAGE_WIDTH) {
                    currentLeft = -PAGE_WIDTH
                } else if (currentLeft === 0) {
                    -(imageCount) * PAGE_WIDTH
                }
            }

            $list.css('left', currentLeft)
        }, ITEM_TIME)

        //更新圆点
        updatePoints(next)
    }

    /* 
        更新圆点
        @param next
    */
    function updatePoints(next) {

        var targetIndex = 0
        if (typeof next === 'boolean') {
            //计算目标圆点下标
            if (next) {
                targetIndex = index + 1 //[0,imgCount-1]
                if (targetIndex === imageCount) {  //此时看到的是1.jpg ---> 第一个圆点
                    targetIndex = 0
                }
            } else {
                targetIndex = index - 1
                if (targetIndex === -1) {  //此时看到的是5.jpg ---> 第五个圆点
                    targetIndex = imageCount - 1
                }
            }
        }
        else{
            targetIndex = next
        }

        //将当前index的圆点class移除
        $points.eq(index).removeClass('on')
        //$points[index].className = ''

        //目标圆点添加class = 'on'
        $points.eq(targetIndex).addClass('on')
        //$points[targetIndex].className = 'on'

        //将index更新为targetIndex
        index = targetIndex
    }



})