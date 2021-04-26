import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        // 首页
        path: '/home',
        component: () =>
            import ("../views/Home/Home.vue"),
        meta: {
            title: "手机外卖App"
        }
    }, {
        // 搜索页
        path: '/search',
        component: () =>
            import ("../views/Search/Search.vue"),
        meta: {
            title: "搜索"
        }
    }, {
        // 订单页
        path: '/order',
        component: () =>
            import ("../views/Order/Order.vue"),
        meta: {
            title: "订单"
        }
    }, {
        // 个人页
        path: '/profile',
        component: () =>
            import ("../views/Profile/Profile.vue"),
        meta: {
            title: "个人中心"
        }
    }]
})