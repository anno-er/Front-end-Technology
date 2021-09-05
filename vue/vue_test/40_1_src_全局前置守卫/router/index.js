// 该文件专门用于创建整个应用的路由器

import VueRouter from 'vue-router'

//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Messages from '../pages/Messages'
import News from '../pages/News'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router =  new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta:{isAuth:false},
                },
                {
                    name:'xiaoxi',
                    path: 'messages',
                    component: Messages,
                    meta:{isAuth:false},
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,

                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形似传给Detail组件
                            // props:{a:1,b:'hello'}

                            //props的第二种写法，值为布尔值，将路由收到的所有params参数通过props传给Detail组件
                            // props:true

                            //props的第二种写法，值为函数
                            props($route){
                                return {id:$route.query.id,title:$route.query.title}
                            }
                        }
                    ]
                }
            ]
        },

    ]
})

//全局前置路由守卫，初始化以及每次路由切换时被调用
router.beforeEach((to,from,next)=>{
    // if(to.path === '/home/news' || to.path === '/home/messages')
    // if(to.name === 'xinwen' || to.name === 'xiaoxi')
    if(to.meta.isAuth)  //判断是否需要鉴定权限
    {
        if(localStorage.getItem('name') === 'changdonglin1'){
            next()
        }else{
            alert('不是本人，无权限')
        }
    }else{
        next()
    }
})

export default router