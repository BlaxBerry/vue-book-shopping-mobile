import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


// 防止重复点击相同路由
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}


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
                import ("../views/Category/Category.vue"),
            meta: {
                title: "图书分类",
                showFooterGuide: true
            }
        }, {
            // 订单页
            path: '/cart',
            component: () =>
                import ("../views/Cart/Cart.vue"),
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
            // 注册界面
            path: '/register',
            component: () =>
                import ("../views/Register/Register.vue"),
        }, {
            // 登陆界面
            path: '/login',
            component: () =>
                import ("../views/Login/Login.vue"),
        }, {
            // 详情页
            path: '/detail',
            component: () =>
                import ("../views/Detail/Detail.vue"),
            meta: {
                title: "商品详情",
                showFooterGuide: true
            }
        }, {
            // 地址列表
            path: '/address',
            component: () =>
                import ("../views/Address/AddressList.vue"),
            meta: {
                title: "地址列表",
                showFooterGuide: true
            }
        }, {
            // 地址修改
            path: '/address_edit',
            component: () =>
                import ("../views/Address/AddressEdit.vue"),
            meta: {
                title: "地址编辑",
                showFooterGuide: true
            }
        }


    ]
})