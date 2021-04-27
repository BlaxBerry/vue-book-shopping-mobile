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
            title: "IT 图书商城",
            showFooterGuide: true
        }
    }, {
        // 搜索页
        path: '/category',
        component: () =>
            import ("../views/Search/Search.vue"),
        meta: {
            title: "图书分类",
            showFooterGuide: true
        }
    }, {
        // 订单页
        path: '/cart',
        component: () =>
            import ("../views/Order/Order.vue"),
        meta: {
            title: "购物车",
            showFooterGuide: true
        }
    }, {
        // 个人页
        path: '/profile',
        component: () =>
            import ("../views/Profile/Profile.vue"),
        meta: {
            title: "个人中心",
            showFooterGuide: true
        }
    }, {
        // 登陆界面
        path: '/login',
        component: () =>
            import ("../views/Login/Login.vue"),
    }]
})