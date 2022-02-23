import VueRouter from 'vue-router'

import Navigation from '../components/Navigation'

export default new VueRouter({
    routes: [
        {
            path: '/navigation',
            component: Navigation
        }
    ]

})