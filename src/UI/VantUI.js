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
    Badge
} from 'vant';

Vue.use(Swipe)
    .use(SwipeItem)
    .use(Lazyload, { loading: require('../assets/images/lazy-load.png') })
    .use(Badge);