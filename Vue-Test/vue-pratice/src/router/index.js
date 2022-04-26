import VueRouter from 'vue-router'

import Navigation from '../components/Navigation'
import MatGlass from '../components/MatGlass'

export default new VueRouter({
    routes: [
        {
            path: '/navigation',
            component: Navigation
        },
        {
            path:'/matGlass',
            component:MatGlass
        },
    ]

})