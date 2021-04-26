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
            title: "手机外卖",
            showFooterGuide: true
        }
    }, {
        // 搜索页
        path: '/search',
        component: () =>
            import ("../views/Search/Search.vue"),
        meta: {
            title: "搜索",
            showFooterGuide: true
        }
    }, {
        // 订单页
        path: '/order',
        component: () =>
            import ("../views/Order/Order.vue"),
        meta: {
            title: "订单列表",
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