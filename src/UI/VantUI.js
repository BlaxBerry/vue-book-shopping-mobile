import Vue from 'vue';
// import Vant from 'vant';
import 'vant/lib/index.css';
// Vue.use(Vant);

import {
    // 轮播图
    Swipe,
    SwipeItem,
    // 懒加载
    Lazyload,
    // 购物车徽标
    Badge,
    // 侧边栏
    Sidebar,
    SidebarItem,
    //折叠面板
    Collapse,
    CollapseItem
} from 'vant';

Vue.use(Swipe)
    .use(SwipeItem)
    .use(Lazyload, { loading: require('../assets/images/lazy-load.png') })
    .use(Badge)
    .use(Sidebar)
    .use(SidebarItem)
    .use(Collapse)
    .use(CollapseItem);