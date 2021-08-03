/*
 1. 鼠标移入显示,移出隐藏
    目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
 3. 输入搜索关键字, 列表显示匹配的结果
 4. 点击显示或者隐藏更多的分享图标
 5. 鼠标移入移出切换地址的显示隐藏
 6. 点击切换地址tab

 7. 鼠标移入移出切换显示迷你购物车
 8. 点击切换产品选项 (商品详情等显示出来)

 9. 点击向右/左, 移动当前展示商品的小图片
 10. 当鼠标悬停在某个小图上,在上方显示对应的中图
 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
 */

/* 
   1.确定绑定监听的对象
   2.确定DOM的具体操作
*/

$(function () {
    showHide()
    hoverSubMenu()
    search()
    share()
    store()
    storeTabs()
    minicartShow()
    clickProductTabs()
    moveMiniImg()
    showMidImg()
    bigImg()

    //11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
    function bigImg() {
        var $mediumImg = $('#mediumImg')
        var $mask = $('#mask') //小黄块
        var $maskTop = $('#maskTop')
        var $largeImgContainer = $('#largeImgContainer')
        var $loading = $('#loading')
        var $largeImg = $('#largeImg')
        var maskWidth = $mask.width()
        var maskHeight = $mask.height()
        var maskTopWidth = $maskTop.width()
        var maskTopHeight = $maskTop.height()

        $maskTop.hover(
            function () {
                //显示小黄块
                $mask.show()

                //动态加载对应大图
                var src = $mediumImg.attr('src').replace('-m.', '-l.')
                $largeImg.attr('src', src)
                $largeImgContainer.show()

                //绑定加载完成的监听
                $largeImg.on('load', function () { //大图加载完成

                    //得到大图的尺寸
                    var largeWidth = $largeImg.width()
                    var largeheight = $largeImg.height()

                    //为大图的容器  $largeImgContainer 设置尺寸
                    $largeImgContainer.css({
                        width: largeWidth / 2,
                        height: largeheight/2
                    })
                    //显示大图
                    $largeImg.show()
                    //隐藏加载进度条
                    $loading.hide()

                    //绑定mouseMove监听
                    $maskTop.mousemove(function (event) {

                        /* 1.移动小黄块*/
                        //计算出小黄块的left和top
                        var left = 0
                        var top = 0

                        //鼠标事件坐标
                        var eventLeft = event.offsetX
                        var eventTop = event.offsetY

                        left = eventLeft - maskWidth / 2
                        top = eventTop - maskHeight / 2

                        //left在[0,maskTopwidth-maskWidth]
                        if (left < 0) {
                            left = 0
                        } else if (left > maskTopWidth - maskWidth) {
                            left = maskTopWidth - maskWidth
                        }
                        //top在[0,maskTopHeight-maskHeight]
                        if (top < 0) {
                            top = 0
                        }
                        else if (top > maskTopHeight - maskHeight) {
                            top = maskTopHeight - maskHeight
                        }
                        //给$mask 小黄块重新定位
                        $mask.css({
                            left: left,
                            top: top
                        })

                        /* 移动大图 */

                        //得到大图的坐标
                        left = -left * largeWidth / maskTopWidth
                        top = -top * largeheight / maskTopHeight
                        //设置大图的坐标
                        $largeImg.css({
                            left: left,
                            top: top
                        })
                    })


                })

            },
            function () {
                $mask.hide()
                $largeImgContainer.hide()
                $largeImg.hide()
            }
        )
    }

    //10. 当鼠标悬停在某个小图上,在上方显示对应的中图
    function showMidImg() {
        $('#icon_list>li').hover(
            function () {
                var $img = $(this).children()
                //this.children()[0].className = 'hoveredThumb'
                $img.addClass('hoveredThumb')
                //显示对应的中图
                var src = $img.attr('src').replace('.jpg', '-m.jpg')
                $('#mediumImg').attr('src', src)
            },
            function () {
                $(this).children().removeClass('hoveredThumb')
            }
        )
    }

    //9. 点击向右/左, 移动当前展示商品的小图片
    function moveMiniImg() {
        var $as = $('#preview>h1>a')
        var $backward = $as.first()
        var $forward = $as.last()
        var SHOW_COUNT = 5
        var $ul = $('#icon_list')
        var imgcount = $ul.children('li').length
        var moveCount = 0 //移动的次数，向右为正，向左为负\
        var liWidth = $ul.children(':first').width()

        //初始化更新
        if (imgcount > SHOW_COUNT) {
            //$forward[0].className = 'forward'
            $forward.attr('class', 'forward')
        }

        //给向右按钮绑定点击监听
        $forward.click(function () {
            //判断是否还可以移动,更新向左的按钮
            if (moveCount === (imgcount - SHOW_COUNT)) {
                return
            }
            moveCount++
            $backward.attr('class', 'backward')

            //更新向右的按钮
            if (moveCount === (imgcount - SHOW_COUNT)) {
                $forward.attr('class', 'forward_disabled')
            }

            //移动ul
            $ul.css({
                left: -moveCount * liWidth
            })
        })

        //给向左按钮绑定点击监听
        $backward.click(function () {
            //判断是否还可以移动,更新向右的按钮
            if (moveCount === 0) {
                return
            }
            moveCount--
            $forward.attr('class', 'forward')

            //更新向左的按钮
            if (moveCount === 0) {
                $forward.attr('class', 'backward_disabled')
            }

            //移动ul
            $ul.css({
                left: -moveCount * liWidth
            })
        })

    }

    //8. 点击切换产品选项 (商品详情等显示出来)
    function clickProductTabs() {
        var $lis = $('#product_detail>ul>li')
        var $contents = $('#product_detail>div:gt(0)')
        $lis.click(function () {
            $lis.removeClass('current')
            this.className = 'current'
            $contents.hide()
            //显示当前对应的DIV
            var index = $(this).index()
            //$contents.eq(index).show()
            $contents[index].style.display = 'block'
        })
    }

    //7. 鼠标移入移出切换显示迷你购物车
    function minicartShow() {
        $('#minicart').hover(
            function () {
                $(this).addClass('minicart')
                $(this).children(':last').show()
            },
            function () {
                $(this).removeClass('minicart')
                $(this).children(':last').hide()
            }

        )
    }

    // 6.点击切换地址tab
    function storeTabs() {
        $('#store_tabs>li').click(function () {
            $('#store_tabs>li').removeClass('hover')
            $(this).addClass('hover')
        })
    }

    // 5. 鼠标移入移出切换地址的显示隐藏
    function store() {
        $('#store_select').hover(
            function () {
                $('#store_content').show()
                $('#store_close').show()
            },
            function () {
                $('#store_content').hide()
                $('#store_close').hide()
            }
        )
        $('#store_close').click(function () {
            $('#store_content').hide()
            $('#store_close').hide()
        })
    }

    // 4. 点击显示或者隐藏更多的分享图标
    function share() {
        var isOpen = false //标识当前的状态（初始为关闭）
        var $shareMore = $('#shareMore')
        var $parent = $shareMore.parent()
        var $as = $shareMore.prevAll('a:lt(2)')
        var $b = $shareMore.children('b')
        $shareMore.click(function () {
            if (isOpen) {//去关闭
                $parent.css('width', 155)
                $as.hide()
                $b.removeClass('backword')
            }
            else {//去打开
                $parent.css('width', 200)
                $as.show()
                $b.addClass('backword')
            }
            isOpen = !isOpen
        })
    }

    // 3. 输入搜索关键字, 列表显示匹配的结果
    function search() {
        // 1.写入数据的时候，出现智能提示
        // 2.失去焦点的时候，隐藏智能提示
        // 3.当输入框中有数据的时候，获得焦点 出现智能提示，
        // 4.当输入框中没有数据的时候，获得焦点 不出现智能提示
        $('#txtSearch')
            .on('keyup focus', function () {
                //如果输入框有文本，显示列表
                var txt = this.value.trim()
                if (txt) {
                    $('#search_helper').show()
                }
            })

            .blur(function () {
                //隐藏列表
                $('#search_helper').hide()
            })
    }

    // 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
    function hoverSubMenu() {
        $('#category_items>div').hover(
            function () {
                $(this).children('div').show()
            },
            function () {
                $(this).children('div').hide()
            }
        )
    }

    /* 1. 鼠标移入显示,移出隐藏
    目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品 */
    function showHide() {
        $('[name=show_hide]').hover(
            function () {
                var id = this.id + '_items'
                $('#' + id).stop().slideDown(300)
            },
            function () {
                var id = this.id + '_items'
                $('#' + id).stop().slideUp(100)
            }
        )
    }
})