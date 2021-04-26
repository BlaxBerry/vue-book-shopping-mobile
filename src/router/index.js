import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

// const routes = [{
//         path: '/',
//         name: 'Home',
//         component: Home
//     },
//     // {
//     //     path: '/about',
//     //     name: 'About',
//     //     // route level code-splitting
//     //     // this generates a separate chunk (about.[hash].js) for this route
//     //     // which is lazy-loaded when the route is visited.
//     //     component: () =>
//     //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
//     // }
// ]

// const router = new VueRouter({
//     routes
// })

// export default router

export default new VueRouter({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        // 首页
        path: '/home',
        component: () =>
            import ("../views/Home/Home.vue")
    }, {
        // 搜索页
        path: '/search',
        component: () =>
            import ("../views/Search/Search.vue")
    }, {
        // 订单页
        path: '/order',
        component: () =>
            import ("../views/Order/Order.vue")
    }, {
        // 个人页
        path: '/profile',
        component: () =>
            import ("../views/Profile/Profile.vue")
    }]
})